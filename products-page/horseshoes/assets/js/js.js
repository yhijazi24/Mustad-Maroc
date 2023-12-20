/*=============== Hamburger Menu ===============*/
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navbar")
const navLink = document.querySelector(".nav__link")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const productsLink = document.getElementById('productsLink');

    productsLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'file:///C:/Users/Utente/Desktop/mustad%20maroc/index.html#product';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productsLink = document.getElementById('AboutLink');

    productsLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'file:///C:/Users/Utente/Desktop/mustad%20maroc/index.html#about';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productsLink = document.getElementById('buyLink');

    productsLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'file:///C:/Users/Utente/Desktop/mustad%20maroc/index.html#buy';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productsLink = document.getElementById('buyLink1');

    productsLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'file:///C:/Users/Utente/Desktop/mustad%20maroc/index.html#buy';
    });
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100,
})
sr.reveal('.container-fluid , .box__container', { delay: 100 })

/*=============== PRODUCT IMAGE SLIDE ===============*/
function img(anything) {
    document.querySelector('.slide').src = anything;
}

function change(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
} 
