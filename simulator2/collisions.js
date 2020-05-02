const{hypot:hypot}=Math;export const calculateChangeDirection=({dx:t,dy:o})=>{const c=hypot(t,o);return{ax:t/c,ay:o/c}};export const checkCollision=({dx:t,dy:o,diameter:c})=>t*t+o*o<c*c;
