export class Libs {
    public static  get_json(url: string, func: Function) {
        //create the request
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, true);
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                //the file is loaded. Parse it as JSON and lauch func
                func(JSON.parse(xmlHttp.responseText));
            }
        };
        //send the request
        xmlHttp.send();
    }

    public static DegToRad(angle: number) {
        return (angle * Math.PI / 180);
    }

    public static GetProjection(angle: number, a: number, zMin: number, zMax: number) {
        const tan=Math.tan(this.DegToRad(0.5 * angle)),
            A=-(zMax+zMin)/(zMax-zMin),
            B=(-2*zMax*zMin)/(zMax-zMin);

        return [
            0.5/tan, 0 ,   0, 0,
            0, 0.5*a/tan,  0, 0,
            0, 0,         A, -1,
            0, 0,         B, 0
        ];
    }

    public static GetI4() {
        return [1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1];
    }

    public static SetI4(m: Array<any>) {
        m[0]=1, m[1]=0, m[2]=0, m[3]=0,
            m[4]=0, m[5]=1, m[6]=0, m[7]=0,
            m[8]=0, m[9]=0, m[10]=1, m[11]=0,
            m[12]=0, m[13]=0, m[14]=0, m[15]=1;
    }

    public static RotateX(m: Array<any>, angle: number) {
        const c=Math.cos(angle);
        const s=Math.sin(angle);
        const mv1=m[1], mv5=m[5], mv9=m[9];
        m[1]=m[1]*c-m[2]*s;
        m[5]=m[5]*c-m[6]*s;
        m[9]=m[9]*c-m[10]*s;

        m[2]=m[2]*c+mv1*s;
        m[6]=m[6]*c+mv5*s;
        m[10]=m[10]*c+mv9*s;
    }

    public static RotateY(m: Array<any>, angle: number) {
        const c=Math.cos(angle);
        const s=Math.sin(angle);
        const mv0=m[0], mv4=m[4], mv8=m[8];
        m[0]=c*m[0]+s*m[2];
        m[4]=c*m[4]+s*m[6];
        m[8]=c*m[8]+s*m[10];

        m[2]=c*m[2]-s*mv0;
        m[6]=c*m[6]-s*mv4;
        m[10]=c*m[10]-s*mv8;
    }

    public static RotateZ(m: Array<any>, angle: number) {
        const c=Math.cos(angle);
        const s=Math.sin(angle);
        const mv0=m[0], mv4=m[4], mv8=m[8];
        m[0]=c*m[0]-s*m[1];
        m[4]=c*m[4]-s*m[5];
        m[8]=c*m[8]-s*m[9];

        m[1]=c*m[1]+s*mv0;
        m[5]=c*m[5]+s*mv4;
        m[9]=c*m[9]+s*mv8;
    }

    public static TranslateZ(m: Array<any>, t: number){
        m[14]+=t;
    }

    public static TranslateY(m: Array<any>, t: number){
        m[13]+=t;
    }
}
