#version 300 es

precision mediump float;
varying float vDepth;

void main(void) {
    float depth2 = vDepth * vDepth;
    float dx = dFdx(vDepth);
    float dy = dFdy(vDepth);
    float depth2Avg = depth2 + 0.25 * (dx * dx + dy * dy);
    gl_FragColor = vec4(vDepth, depth2Avg, 0. ,1.);
}
