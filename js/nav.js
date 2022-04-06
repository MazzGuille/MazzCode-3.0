const ham = document.querySelector('.nav-menu');
const menu = document.querySelector('.link-container');
const menuContainer = document.querySelector('.menu-container');
let menuOpen = false;


ham.addEventListener('click', () => {
    menu.classList.toggle('hide');
    gsap.from('.link-container', { duration: 4, x: '100%', ease: 'elastic' });
})


menuContainer.addEventListener('click', () => {
    if(!menuOpen) {
        menuContainer.classList.add('open');
        menuOpen = true;
    } else{
        menuContainer.classList.remove('open');
        menuOpen = false;
    }
});



