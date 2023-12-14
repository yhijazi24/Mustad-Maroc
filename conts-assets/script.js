function toggleMenu() {
    var hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('active');
  }
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
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100,
})
sr.reveal('.container-fluid', { delay: 100 })
/*=============== CONTACT FORM VALIDATION ===============*/
function submitForm() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const iam = document.getElementById('00N2400000EtJeo').value;
    const contactAbout = document.getElementById('00N2400000Istrh').value;

    if (!firstName || !lastName || !email || !phone || !iam || !contactAbout) {
        const alertBox = document.querySelector('.alert')
        return;
    }
}

