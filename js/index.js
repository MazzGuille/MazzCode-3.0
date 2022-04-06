/* gsap.registerPlugin(ScrollTrigger); */

const tl = gsap.timeline({ defaults: { duration: 2 } });
tl
.from('.nav', {opacity: 0})
.from('.wrapper', {opacity: 0, x: -100})
.from('.footer', {opacity: 0, y: -100})
.to('.wrapper', {scale:1.3});