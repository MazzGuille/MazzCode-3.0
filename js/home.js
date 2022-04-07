

function welcome() {
    var clientName = document.getElementById('txt').value;
    localStorage.setItem('textvalue', clientName);
    return false;
}

const home = gsap.timeline({ defaults: { duration: 2 } });
home
.from('.img-container', { opacity: 0, x: 300 })
.from('.visitor-name', { opacity: 0, y: -300})
.from('.btn', { opacity: 0, y: -300}, "-=1"  )
.from('.footer', { opacity: 0 });


