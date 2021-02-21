#version 300 es

attribute vec3 position, normal;
attribute vec2 uv;

uniform mat4 Pmatrix, Vmatrix, Mmatrix;
uniform mat4 Lmatrix, PmatrixLight;

varying vec2 vUV;
varying vec3 vNormal, vLightPos;

void main(void) {
    vec4 lightPos = Lmatrix * vec4(position, 1.);
    lightPos=PmatrixLight*lightPos;
    vec3 lightPosDNC=lightPos.xyz/lightPos.w;
    vLightPos=vec3(0.5,0.5,0.5)+lightPosDNC*0.5;
    gl_Position = Pmatrix*Vmatrix*Mmatrix*vec4(position, 1.);
    vNormal=normal;
    vUV=uv;
}
