document.getElementById('name').innerHTML = localStorage.getItem('textvalue');

const tl = gsap.timeline({defaults: {duration: 2}});
tl
.from('.img-container', {rotation: 720, opacity: 0})
.from('.h2-mobile', {opacity: 0})
.from('.h1-mobile', {scale: 0})
.from('.footer', {opacity: 0, y: -100});