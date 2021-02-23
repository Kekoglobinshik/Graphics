import {WebGL} from "./libs/WebGLContext";
import {Move} from './libs/move';
import {Helper} from './libs/helper';
import {Shader} from "./libs/shader";
import {ShaderVariable} from "./libs/variables";
import vec3 from "./libs/tsm/vec3";
import mat4 from "./libs/tsm/mat4";
import {CubeTexture, RenderTexture, Texture} from "./libs/texture";
import {Model} from "./libs/tsm/model";
import {Camera} from "./libs/camera";
import {Skybox} from "./libs/skybox";

const firstDragonTransform = new Move(new vec3([0, 0, 0]), new vec3([1, 1, 1]));
const secondDragonTransform = new Move(new vec3([0, 0, 10]), new vec3([1, 1, 1]));
const floorTransform = new Move(new vec3([0, 0, 0]), new vec3([1, 1, 1]));
const lightDirection = new vec3([0.58, 0.58, -0.58]);
let lightMatrix: mat4;

const updateLightMatrix = () => lightMatrix = mat4.lookAt(lightDirection, new vec3([0, 0, 0]), new vec3([0, 1, 0]));
updateLightMatrix();

document.addEventListener('DOMContentLoaded', async () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    try {
        WebGL.context = canvas.getContext('webgl2', {antialias: true}) as WebGL2RenderingContext;
    } catch (e) {
        alert('You are not webgl compatible :(');
        return false;
    }

    const camera = new Camera(canvas, firstDragonTransform.position);
    const modelVertShader = await Helper.MakeRequest('./resources/shaders/model.vert', 'text');
    const modelFragShader = await Helper.MakeRequest('./resources/shaders/model.frag', 'text');
    const shadowVertShader = await Helper.MakeRequest('./resources/shaders/shadow.vert', 'text');
    const shadowFragShader = await Helper.MakeRequest('./resources/shaders/shadow.frag', 'text');
    const skyboxVertShader = await Helper.MakeRequest('./resources/shaders/skybox.vert', 'text');
    const skyboxFragShader = await Helper.MakeRequest('./resources/shaders/skybox.frag', 'text');

    const cubeTexture = CubeTexture.loadImageAsCube(CubeTexture.oceanCubeMapPath());

    const dragonJson = await Helper.GetJson('./resources/dragon.json');

    const shadowShader = new Shader(shadowVertShader, shadowFragShader);
    const programShader = new Shader(modelVertShader, modelFragShader);

    programShader.use();
    WebGL.context.uniform1i(programShader.getUniformLocation(ShaderVariable.sampler), 0);
    WebGL.context.uniform1i(programShader.getUniformLocation(ShaderVariable.samplerShadowMap), 1);
    WebGL.context.uniform3fv(programShader.getUniformLocation(ShaderVariable.lightDirection), lightDirection.xyz);

    const projectionShadow = mat4.orthographic(-50, 50, -50, 50, 1, 100);

    const textureRender = new RenderTexture();
    const firstDragonModel = new Model(dragonJson.vertices, dragonJson.indices, [Texture.loadImage('./resources/dragon.png'), textureRender]);
    const secondDragonModel = new Model(dragonJson.vertices, dragonJson.indices, [Texture.loadImage('./resources/dragon.png'), textureRender]);
    const floorModel = Model.createFloor(20, Texture.loadImage('./resources/granit.jpg'));
    const skybox = new Skybox(cubeTexture, skyboxVertShader, skyboxFragShader);

    WebGL.context.enable(WebGL.context.DEPTH_TEST);
    WebGL.context.depthFunc(WebGL.context.LEQUAL);
    WebGL.context.clearDepth(1.0);

    let time_old = 0;
    let fps_time = 0;
    let fps_frames = 0;
    let fps_counter = document.getElementById("fps_counter");
    const animate = function (time: number) {
        const dt = time - time_old;
        time_old = time;

        fps_time += dt;
        fps_frames++;
        if (fps_time > 1000) {
            var fps = 1000 * fps_frames / fps_time;
            // @ts-ignore
            fps_counter.innerHTML = Math.round(fps) + " FPS";
            fps_time = fps_frames = 0;
        }

        camera.update();

        textureRender.renderToTexture(() => {
            shadowShader.use();
            WebGL.context.depthFunc(WebGL.context.LESS);
            WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(ShaderVariable.Pmatrix), false, projectionShadow.all());
            WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(ShaderVariable.Lmatrix), false, lightMatrix.all());

            firstDragonModel.render(() => WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(ShaderVariable.Mmatrix), false, firstDragonTransform.getModelMatrix().all()));
            secondDragonModel.render(() => WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(ShaderVariable.Mmatrix), false, secondDragonTransform.getModelMatrix().all()));
            floorModel.render(() => WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(ShaderVariable.Mmatrix), false, floorTransform.getModelMatrix().all()));
        });

        programShader.use();
        WebGL.context.depthFunc(WebGL.context.LESS);
        WebGL.context.viewport(0.0, 0.0, canvas.width, canvas.height);
        WebGL.context.clearColor(0.0, 0.0, 0.0, 1.0);
        WebGL.context.clear(WebGL.context.COLOR_BUFFER_BIT | WebGL.context.DEPTH_BUFFER_BIT);
        WebGL.context.uniformMatrix4fv(programShader.getUniformLocation(ShaderVariable.Pmatrix), false, camera.getProjection().all());
        WebGL.context.uniformMatrix4fv(programShader.getUniformLocation(ShaderVariable.Vmatrix), false, camera.getView().all());
        WebGL.context.uniformMatrix4fv(programShader.getUniformLocation(ShaderVariable.PmatrixLight), false, projectionShadow.all());
        WebGL.context.uniformMatrix4fv(programShader.getUniformLocation(ShaderVariable.Lmatrix), false, lightMatrix.all());

        firstDragonModel.render(() => WebGL.context.uniformMatrix4fv(programShader.getUniformLocation(ShaderVariable.Mmatrix), false, firstDragonTransform.getModelMatrix().all()));
        secondDragonModel.render(() => WebGL.context.uniformMatrix4fv(programShader.getUniformLocation(ShaderVariable.Mmatrix), false, secondDragonTransform.getModelMatrix().all()));
        floorModel.render(() => WebGL.context.uniformMatrix4fv(programShader.getUniformLocation(ShaderVariable.Mmatrix), false, floorTransform.getModelMatrix().all()));
        skybox.render(camera);

        WebGL.context.flush();
        window.requestAnimationFrame(animate);
    };

    animate(0);
});

[].forEach.call(document.getElementsByClassName('light'), (item: Element) => {
    item.addEventListener('input', (event: any) => {
        // @ts-ignore
        lightDirection[event.target.id] = event.target.value;
        updateLightMatrix();
    });
});

window.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.key) {
        case 'w':
            firstDragonTransform.translate(new vec3([-1, 0, 0]));
            break;
        case 'a':
            firstDragonTransform.translate(new vec3([0, 0, 1]));
            break;
        case 's':
            firstDragonTransform.translate(new vec3([1, 0, 0]));
            break;
        case 'd':
            firstDragonTransform.translate(new vec3([0, 0, -1]));
            break;

        case 't':
            secondDragonTransform.translate(new vec3([-1, 0, 0]));
            break;
        case 'f':
            secondDragonTransform.translate(new vec3([0, 0, 1]));
            break;
        case 'g':
            secondDragonTransform.translate(new vec3([1, 0, 0]));
            break;
        case 'h':
            secondDragonTransform.translate(new vec3([0, 0, -1]));
            break;
    }
    updateLightMatrix();
}, false);
