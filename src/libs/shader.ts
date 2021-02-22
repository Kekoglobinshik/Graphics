import {WebGL} from "./WebGLContext";

export class Shader {
    private _program: WebGLProgram | null;
    private _uniformCash: Map<string,  WebGLUniformLocation> = new Map<string, WebGLUniformLocation>();

    constructor(vertexShader: string, fragmentShader: string) {
        const shaderV = WebGL.context.createShader(WebGL.context.VERTEX_SHADER) as WebGLShader;
        WebGL.context.shaderSource(shaderV, vertexShader);
        WebGL.context.compileShader(shaderV);

        if (!WebGL.context.getShaderParameter(shaderV, WebGL.context.COMPILE_STATUS)) {
            console.error(WebGL.context.getShaderInfoLog(shaderV));
            throw new Error('Failed to compile vertex shader');
        }

        const shaderF = WebGL.context.createShader(WebGL.context.FRAGMENT_SHADER) as WebGLShader;
        WebGL.context.shaderSource(shaderF, fragmentShader);
        WebGL.context.compileShader(shaderF);

        if (!WebGL.context.getShaderParameter(shaderF, WebGL.context.COMPILE_STATUS)) {
            console.error(WebGL.context.getShaderInfoLog(shaderF));
            throw new Error('Failed to compile fragment shader');
        }

        this._program = WebGL.context.createProgram();
        if (!this._program) {
            throw new Error('Failed to compile shader program');
        }
        WebGL.context.attachShader(this._program, shaderV);
        WebGL.context.attachShader(this._program, shaderF);
        WebGL.context.linkProgram(this._program);

        if (!WebGL.context.getProgramParameter(this._program, WebGL.context.LINK_STATUS)) {
            console.error(WebGL.context.getProgramInfoLog(this._program));
            throw new Error('Failed to link program');
        }
    }

    use() {
        WebGL.context.useProgram(this._program);
    }

    getUniformLocation(name: string): WebGLUniformLocation {
        let location = this._uniformCash.get(name);
        if (!location) {
            location = WebGL.context.getUniformLocation(this._program as WebGLProgram, name) as WebGLUniformLocation;
        }

        return location;
    }
}
