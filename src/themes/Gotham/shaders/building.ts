// @ts-ignore
import glsl from "babel-plugin-glsl/macro";

export const vert = glsl`
    attribute float seed;
    attribute vec3 color;
    
    uniform float time;
    
    varying vec3 vPos;
     
    void main() {
        vec4 pos = instanceMatrix * vec4(position, 1.0);
        vec4 mvPosition = modelViewMatrix * vec4( pos );
        gl_Position = projectionMatrix * mvPosition;
        
        vPos = pos.xyz;
        
        float seed_offset = seed * 55.;
        float pos_offset = ( vPos.y ) * 400.;

        // float shine = pow( sin(time * 1. + pos_offset), 400. );
        // gl_Position.x += 2. * shine;
    }
`;

export const frag = glsl`
  uniform float time;
  uniform vec3 fogColor;
  
  varying float vSeed;
  varying vec3 vPos;
  
  #define fogNear 20.0
  #define fogFar 200.0

  void main() {
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = smoothstep( fogNear, fogFar, depth );
        
        //#383645 gray
        //#odod10 dark blue
    gl_FragColor.rgb = vec3(0.22,0.212,0.271); //mix(vec3(0.22,0.212,0.271), vec3(0.22,0.212,0.271), vPos.x / 50.);
    
    float pos_offset = ( vPos.y ) * 0.75;
    gl_FragColor.rgb = clamp(gl_FragColor.rgb + 0.1 * sin(time * 0.8 + pos_offset), 0., 1.);
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  }
`;
