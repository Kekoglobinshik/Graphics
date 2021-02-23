#version 300 es
precision mediump float;

in vec3 uv;
out vec4 myOutputColor;
uniform samplerCube skybox;
uniform mat4 Pmatrix;
uniform mat4 Vmatrix;

void main()
{
    vec4 t = inverse(Pmatrix * Vmatrix) * vec4(uv, 1.0);
    myOutputColor = texture(skybox, normalize(t.xyz / t.w));
}
