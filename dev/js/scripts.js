import gsap from "gsap/gsap-core"
import {circleAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(circleAnimation());
