#version 300 es

precision mediump float;

uniform sampler2D sampler;
uniform sampler2D samplerShadowMap;

uniform vec3 source_direction;
varying vec3 vNormal;
varying vec3 vLightPos;
varying vec2 vUV;

const vec3 source_ambient_color = vec3(1., 1., 1.);
const vec3 source_diffuse_color = vec3(1., 1., 1.);
const vec3 mat_ambient_color = vec3(0.3, 0.3, 0.3);
const vec3 mat_diffuse_color = vec3(1., 1., 1.);

const float mat_shininess = 10.;

void main(void) {
    vec2 uv_shadowMap = vLightPos.xy;
    vec4 shadowMapColor = texture2D(samplerShadowMap, uv_shadowMap);
    float variance = shadowMapColor.g - shadowMapColor.r * shadowMapColor.r;
    variance = max(variance, 0.002);
    float d = shadowMapColor.r-vLightPos.z;
    float shadowCoeff = variance / (variance + d*d);
    vec3 color = vec3(texture2D(sampler, vUV));
    vec3 I_ambient = source_ambient_color * mat_ambient_color;
    vec3 I_diffuse = source_diffuse_color * mat_diffuse_color * max(0., dot(vNormal, source_direction));
    vec3 I = I_ambient+shadowCoeff * I_diffuse;
    gl_FragColor = vec4(I*color, 1.);
}
