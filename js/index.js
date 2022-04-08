/* gsap.registerPlugin(ScrollTrigger); */

const tl = gsap.timeline({ defaults: { duration: 2 } });
tl
.from('.nav', {opacity: 0})
.from('.resposive-font-h2', {opacity: 0, x: -100})
.from('.responsive-footer', {opacity: 0, y: -100})
.to('.resposive-font-h2', {scale:1.3});