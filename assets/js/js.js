/*=============== Hamburger Menu ===============*/
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navbar")
const navLink = document.querySelector(".nav-link")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1440: {
            spaceBetween: -32,
        }
    }
})
/*=============== TORE LOCATOR ===============*/
const CONFIGURATION = {
    "locations": [
        { "title": "Mustad Maroc", "address1": "21 zone industrielle", "address2": "Settat, Maroc", "coords": { "lat": 32.980218828770774, "lng": -7.611912621179209 }, "placeId": "EhZSMzA42IwgU2V0dGF0LCBNb3JvY2NvIi4qLAoUChIJvyZYaxu2pQ0Rp5h5HkCo3G4SFAoSCZmeQqldBaYNERL63t6VXo0_" }
    ],
    "mapOptions": { "center": { "lat": 38.0, "lng": -100.0 }, "fullscreenControl": true, "mapTypeControl": false, "streetViewControl": false, "zoom": 4, "zoomControl": true, "maxZoom": 17, "mapId": "" },
    "mapsApiKey": "AIzaSyAFOVo15-LD4_M9gERnCqTNZI_JAcmwV1c",
    "capabilities": { "input": false, "autocomplete": false, "directions": false, "distanceMatrix": false, "details": false, "actions": false }
};
document.addEventListener('DOMContentLoaded', async () => {
    await customElements.whenDefined('gmpx-store-locator');
    const locator = document.querySelector('gmpx-store-locator');
    locator.configureFromQuickBuilder(CONFIGURATION);
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.image__list a[href*=' + sectionId + ']')
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
           
        }
    })
}

window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100,
})
sr.reveal('.home__container', { delay: 100 })


