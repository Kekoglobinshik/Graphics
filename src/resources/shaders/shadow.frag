#version 300 es

precision mediump float;
in float vDepth;
out vec4 myOutputColor;

void main(void) {
    float depth2 = vDepth * vDepth;
    float dx = dFdx(vDepth);
    float dy = dFdy(vDepth);
    float depth2Avg = depth2 + 0.25 * (dx * dx + dy * dy);
    myOutputColor = vec4(vDepth, depth2Avg, 0. ,1.);
}
