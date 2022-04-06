const tl = gsap.timeline({defaults: { duration: 2 } });
tl
.from('.img-container', { scale: 0, opacity: 0 })
.fromTo('.wrapper', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1.25})
.fromTo('.wrapper', {scale: 1.25 }, {scale: 1, stagger: 0.5 })
.from('.footer', {opacity: 0, y: -100});
