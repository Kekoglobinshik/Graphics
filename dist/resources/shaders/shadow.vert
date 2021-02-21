#version 300 es

attribute vec3 position;
uniform mat4 Pmatrix, Lmatrix;
varying float vDepth;

void main(void) {
    vec4 position = Pmatrix * Lmatrix * vec4(position, 1.);
    float zBuf = position.z / position.w;
    vDepth = 0.5 + zBuf * 0.5;
    gl_Position = position;
}
