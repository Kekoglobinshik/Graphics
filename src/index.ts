import {Libs} from './libs/libs';

document.addEventListener('DOMContentLoaded', async () => {
    const canvas = document.getElementById('your_canvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;

    /*========================= CAPTURE MOUSE EVENTS ========================= */
    const AMORTIZATION = 0.95;
    let drag = false;
    let oldX: number;
    let oldY: number;
    let dX = 0;
    let dY = 0;

    const mouseDown = (e: any) => {
        drag = true;
        oldX = e.pageX;
        oldY = e.pageY;
        e.preventDefault();
        return false;
    };

    const mouseUp = () => {
        drag = false;
    };

    const mouseMove = (e: any) => {
        if (!drag) return false;
        dX = (e.pageX - oldX) * 2 * Math.PI / canvas.width;
        dY = (e.pageY - oldY) * 2 * Math.PI / canvas.height;
        THETA += dX;
        PHI += dY;
        THETA += dX;
        PHI += dY;
        oldX = e.pageX;
        oldY = e.pageY;
        e.preventDefault();
    };

    canvas.addEventListener("mousedown", mouseDown, false);
    canvas.addEventListener("mouseup", mouseUp, false);
    canvas.addEventListener("mouseout", mouseUp, false);
    canvas.addEventListener("mousemove", mouseMove, false);

    /*========================= GET WEBGL CONTEXT ========================= */
    let GL: any;
    try {
        GL = canvas.getContext('experimental-webgl', {antialias: true});
        const EXT = GL.getExtension("OES_element_index_uint") ||
            GL.getExtension("MOZ_OES_element_index_uint") ||
            GL.getExtension("WEBKIT_OES_element_index_uint");
    } catch (e) {
        alert('You are not webgl compatible :(');
        return false;
    }

    /*========================= SHADERS ========================= */

    const shaderVertexSource = "\n\
        attribute vec3 position;\n\
        attribute vec2 uv;\n\
        attribute vec3 normal;\n\
        uniform mat4 Pmatrix;\n\
        uniform mat4 Vmatrix;\n\
        uniform mat4 Mmatrix;\n\
        varying vec2 vUV;\n\
        varying vec3 vNormal;\n\
        varying vec3 vView;\n\
        \n\
        void main(void) {\n\
            gl_Position = Pmatrix*Vmatrix*Mmatrix*vec4(position, 1.);\n\
            vNormal=vec3(Mmatrix*vec4(normal, 0.));\n\
            vView=vec3(Vmatrix*Mmatrix*vec4(position, 1.));\n\
            vUV=uv;\n\
        }";

    var shaderFragmentSource = "\n\
        precision mediump float;\n\
        uniform sampler2D sampler;\n\
        varying vec2 vUV;\n\
        varying vec3 vNormal;\n\
        varying vec3 vView;\n\
        const vec3 source_ambient_color=vec3(1.,1.,1.);\n\
        const vec3 source_diffuse_color=vec3(1.,2.,4.);\n\
        const vec3 source_specular_color=vec3(1.,1.,1.);\n\
        const vec3 source_direction=vec3(0.,0.,1.);\n\
        \n\
        const vec3 mat_ambient_color=vec3(0.3,0.3,0.3);\n\
        const vec3 mat_diffuse_color=vec3(1.,1.,1.);\n\
        const vec3 mat_specular_color=vec3(1.,1.,1.);\n\
        const float mat_shininess=10.;\n\
        \n\
        \n\
        \n\
        void main(void) {\n\
            vec3 color=vec3(texture2D(sampler, vUV));\n\
            vec3 I_ambient=source_ambient_color*mat_ambient_color;\n\
            vec3 I_diffuse=source_diffuse_color*mat_diffuse_color*max(0., dot(vNormal, source_direction));\n\
            vec3 V=normalize(vView);\n\
            vec3 R=reflect(source_direction, vNormal);\n\
            \n\
            \n\
            vec3 I_specular=source_specular_color*mat_specular_color*pow(max(dot(R,V),0.), mat_shininess);\n\
            vec3 I=I_ambient+I_diffuse+I_specular;\n\
            gl_FragColor = vec4(I*color, 1.);\n\
        }";

    const getShader = (source: any, type: any, typeString: string) => {
        const shader = GL.createShader(type);
        GL.shaderSource(shader, source);
        GL.compileShader(shader);
        if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
            alert('ERROR IN ' + typeString + ' SHADER : ' + GL.getShaderInfoLog(shader));
            return false;
        }
        return shader;
    };

    const shaderVertex = getShader(shaderVertexSource, GL.VERTEX_SHADER, 'VERTEX');
    const shaderFragment = getShader(shaderFragmentSource, GL.FRAGMENT_SHADER, 'FRAGMENT');

    const SHADER_PROGRAM = GL.createProgram();
    GL.attachShader(SHADER_PROGRAM, shaderVertex);
    GL.attachShader(SHADER_PROGRAM, shaderFragment);

    GL.linkProgram(SHADER_PROGRAM);

    const _Pmatrix = GL.getUniformLocation(SHADER_PROGRAM, "Pmatrix");
    const _Vmatrix = GL.getUniformLocation(SHADER_PROGRAM, "Vmatrix");
    const _Mmatrix = GL.getUniformLocation(SHADER_PROGRAM, "Mmatrix");

    const _sampler = GL.getUniformLocation(SHADER_PROGRAM, "sampler");
    const _uv = GL.getAttribLocation(SHADER_PROGRAM, "uv");
    const _position = GL.getAttribLocation(SHADER_PROGRAM, 'position');
    const _normal = GL.getAttribLocation(SHADER_PROGRAM, "normal");

    GL.enableVertexAttribArray(_uv);
    GL.enableVertexAttribArray(_position);
    GL.enableVertexAttribArray(_normal);

    GL.useProgram(SHADER_PROGRAM);
    GL.uniform1i(_sampler, 0);
    /*========================= THE DRAGON ========================= */
    var CUBE_VERTEX = false, CUBE_FACES = false, CUBE_NPOINTS = 0;

    Libs.get_json("resources/dragon.json", function (dragon: any) {
        //vertices
        CUBE_VERTEX = GL.createBuffer();
        GL.bindBuffer(GL.ARRAY_BUFFER, CUBE_VERTEX);
        GL.bufferData(GL.ARRAY_BUFFER,
            new Float32Array(dragon.vertices),
            GL.STATIC_DRAW);

        //faces
        CUBE_FACES = GL.createBuffer();
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, CUBE_FACES);
        GL.bufferData(GL.ELEMENT_ARRAY_BUFFER,
            new Uint32Array(dragon.indices),
            GL.STATIC_DRAW);

        CUBE_NPOINTS = dragon.indices.length;

        animate(0);

    });

    /*========================= MATRIX ========================= */
    const PROJMATRIX = Libs.GetProjection(40, canvas.width / canvas.height, 1, 100);
    const MOVEMATRIX = Libs.GetI4();
    const VIEWMATRIX = Libs.GetI4();

    Libs.TranslateZ(VIEWMATRIX, -20);
    Libs.TranslateY(VIEWMATRIX, -4);
    let THETA = 0, PHI = 0;

    /*========================= TEXTURES ========================= */
    const getTexture = (image_URL: string) => {
        let image = new Image();
        image.src = image_URL;
        // @ts-ignore
        image['webglTexture'] = false;

        image.onload = function (e) {
            const texture = GL.createTexture();
            GL.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, true);
            GL.bindTexture(GL.TEXTURE_2D, texture);
            GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, image);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
            GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR_MIPMAP_LINEAR);
            GL.generateMipmap(GL.TEXTURE_2D);
            GL.bindTexture(GL.TEXTURE_2D, null);
            // @ts-ignore
            image['webglTexture'] = texture;
        };

        return image;
    };

    const cube_texture = getTexture("resources/dragon.png");

    /*========================= DRAWING ========================= */
    GL.clearColor(0.0, 0.0, 0.0, 0.0);

    GL.enable(GL.DEPTH_TEST);
    GL.depthFunc(GL.LEQUAL);

    GL.clearDepth(1.0);
    let time_old = 0;
    let fps_time = 0;
    let fps_frames = 0;
    let dom_counter = document.getElementById("fps_counter");
    const animate = (time: number) => {
        var dt=time-time_old;
        if (!drag) {
            dX *= AMORTIZATION;
            dY *= AMORTIZATION;
            THETA += dX;
            PHI += dY;
        }
        Libs.SetI4(MOVEMATRIX);
        Libs.RotateY(MOVEMATRIX, THETA);
        Libs.RotateX(MOVEMATRIX, PHI);
        time_old = time;
        fps_time+=dt;
        fps_frames++;
        if (fps_time>1000) {
            var fps=1000 * fps_frames/fps_time;
            // @ts-ignore
            dom_counter.innerHTML=Math.round(fps) + " FPS";
            fps_time = fps_frames = 0;
        }
        GL.viewport(0.0, 0.0, canvas.width, canvas.height);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

        GL.uniformMatrix4fv(_Pmatrix, false, PROJMATRIX);
        GL.uniformMatrix4fv(_Vmatrix, false, VIEWMATRIX);
        GL.uniformMatrix4fv(_Mmatrix, false, MOVEMATRIX);

        // @ts-ignore
        if (cube_texture['webglTexture']) {
            GL.activeTexture(GL.TEXTURE0);
            // @ts-ignore
            GL.bindTexture(GL.TEXTURE_2D, cube_texture['webglTexture']);
        }

        GL.bindBuffer(GL.ARRAY_BUFFER, CUBE_VERTEX);

        GL.vertexAttribPointer(_position, 3, GL.FLOAT, false, 4 * (3 + 3 + 2), 0);
        GL.vertexAttribPointer(_uv, 2, GL.FLOAT, false, 4 * (3 + 3 + 2), (3 + 3) * 4);
        GL.vertexAttribPointer(_normal, 3, GL.FLOAT, false, 4 * (3 + 3 + 2), 3 * 4);

        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, CUBE_FACES);
        GL.drawElements(GL.TRIANGLES, CUBE_NPOINTS, GL.UNSIGNED_INT, 0);

        GL.flush();

        window.requestAnimationFrame(animate);
    };

    animate(0);
});
