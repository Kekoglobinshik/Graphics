import {WebGL} from "./libs/WebGLContext";
import {Move} from './libs/move';
import {Helper} from './libs/helper';
import {Shader} from "./libs/shader";
import {ShaderVariable} from "./libs/variables";
import vec3 from "./libs/tsm/vec3";
import mat4 from "./libs/tsm/mat4";
import {RenderTexture, Texture} from "./libs/texture";
import {Model} from "./libs/tsm/model";
import {Camera} from "./libs/camera";

const dragonTransform = new Move(new vec3([0, 0, 0]), new vec3([1, 1, 1]));
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

    const camera = new Camera(canvas, dragonTransform.position);
    const modelVertShader = await Helper.MakeRequest('./resources/shaders/model.vert', 'text');
    const modelFragShader = await Helper.MakeRequest('./resources/shaders/model.frag', 'text');
    const shadowFragShader = await Helper.MakeRequest('./resources/shaders/shadow.frag', 'text');
    const shadowVertShader = await Helper.MakeRequest('./resources/shaders/shadow.vert', 'text');

    const dragonJson = await Helper.GetJson('./resources/dragon.json');

    const shadowShader = new Shader(shadowVertShader, shadowFragShader);
    const shaderProgram = new Shader(modelVertShader, modelFragShader);

    WebGL.context.uniform1i(shaderProgram.getUniformLocation(ShaderVariable.sampler), 0);
    WebGL.context.uniform1i(shaderProgram.getUniformLocation(ShaderVariable.samplerShadowMap), 1);
    WebGL.context.uniform3fv(shaderProgram.getUniformLocation(ShaderVariable.lightDirection), lightDirection.xyz);

    const projectionShadow = mat4.orthographic(-50, 50, -50, 50, 1, 100);

    const textureRender = new RenderTexture();
    const dragonModel = new Model(dragonJson.vertices, dragonJson.indices, [Texture.loadImage('./resources/dragon.png'), textureRender]);
    const floorModel = Model.createFloor(30, Texture.loadImage('./resources/granit.jpg'));

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

            dragonModel.render(() => WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(ShaderVariable.Mmatrix), false, dragonTransform.getModelMatrix().all()));
            // cubeModel.render(() => WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(ShaderVariable.Mmatrix), false, cubeTransform.getModelMatrix().all()));
            floorModel.render(() => WebGL.context.uniformMatrix4fv(shadowShader.getUniformLocation(ShaderVariable.Mmatrix), false, floorTransform.getModelMatrix().all()));
        });

        shaderProgram.use();
        WebGL.context.depthFunc(WebGL.context.LESS);
        WebGL.context.viewport(0.0, 0.0, canvas.width, canvas.height);
        WebGL.context.clearColor(0.0, 0.0, 0.0, 1.0);
        WebGL.context.clear(WebGL.context.COLOR_BUFFER_BIT | WebGL.context.DEPTH_BUFFER_BIT);
        WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(ShaderVariable.Pmatrix), false, camera.getProjection().all());
        WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(ShaderVariable.Vmatrix), false, camera.getView().all());
        WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(ShaderVariable.PmatrixLight), false, projectionShadow.all());
        WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(ShaderVariable.Lmatrix), false, lightMatrix.all());

        dragonModel.render(() => WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(ShaderVariable.Mmatrix), false, dragonTransform.getModelMatrix().all()));
        // cubeModel.render(() => WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(ShaderVariable.Mmatrix), false, cubeTransform.getModelMatrix().all()));
        floorModel.render(() => WebGL.context.uniformMatrix4fv(shaderProgram.getUniformLocation(ShaderVariable.Mmatrix), false, floorTransform.getModelMatrix().all()));
        // skybox.render(camera);

        WebGL.context.flush();
        window.requestAnimationFrame(animate);
    };

    animate(0);
});
