gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { duration: 2 }});
tl
.from('.responsive-footer', {opacity: 0, y: -100})
.from('.logo-container', { scale: 0, opacity: 0 })
.from('.bit-home', { opacity: 0, x: 300 })
.from('.guillermo', { x: -300, opacity: 0 })
.from('.growth', { opacity: 0, x: 300 })
.from('.proyects', { x: -300, opacity: 0 })
.from('.telling', { opacity: 0, x: 300 });

const proyect = gsap.timeline({ defaults: { duration: 2 }},
    {
        scrollTrigger: {
        trigger: '.diverxo',
        start: 'top, center',
        markers: true, 
        /* endTrigger: '.preview-container',
        end: 'bottom, top', */
        toggleActions: "restart",
    }
});
proyect
.from('.diverxo', {opacity: 0, x: 200 }, "+=2")
.from('.space', {opacity: 0, x: -200 });



