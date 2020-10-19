import {gsap} from "gsap";

gsap.set("#circle-animation",{transformOrigin:"center"});

const circleAnimationTL = gsap.timeline();
circleAnimationTL.from("#circle",{duration:3, x:-400, ease:"none", scale:3},"circle")
            .from("#circle1",{duration:1, y:-400, ease:"none"})
            .to("#circle2",{duration:2, y:400, ease:"none"},"circle");


export function circleAnimation(){
    return circleAnimationTL;
}