document.getElementById('name').innerHTML = localStorage.getItem('textvalue');

const tl = gsap.timeline({defaults: {duration: 2}});
tl
.from('.img-container', {rotation: 720, opacity: 0})
.from('.resposive-font-h2', {opacity: 0})
.from('.resposive-font-h1', {scale: 0})
.from('.responsive-footer', {opacity: 0, y: -100});