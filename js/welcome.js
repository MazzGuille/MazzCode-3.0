document.getElementById('name').innerHTML = localStorage.getItem('textvalue');

const tl = gsap.timeline({defaults: {duration: 2}});
tl
.from('.logo-container', {rotation: 720, opacity: 0})
.from('.img-container', {rotation: 720, opacity: 0})
.from('.resposive-font-h2', {opacity: 0})
.fromTo('.resposive-font-h1', {scale: 0}, {scale: 1.5})
.from('.responsive-footer', {opacity: 0, y: -100});