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
var navLinks = navMenu.getElementsByTagName('a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        navMenu.style.display = 'none';
    });
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
sr.reveal('.container-fluid', { delay: 100 })
/*=============== CONTACT FORM VALIDATION ===============*/


/*=============== CONTACT FORM SENDER ===============*/
function SendMail() {
    // Get values from the form fields
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var preffered = document.getElementById('form-phone').value;
    var iam = document.getElementById('00N2400000EtJeo').value;
    var city = document.getElementById('city').value;
    var about = document.getElementById('00N2400000Istrh').value;
    var comment = document.getElementById('00N2400000EB8hh').value;

    // Check if all required fields are filled
    if (firstName && lastName && email && phone && iam && about) {

        var params = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            preffered: preffered,
            iam: iam,
            city: city,
            about: about,
            comment: comment
        }
        emailjs.send("service_nuvubpw", "template_lsmw6mr", params)
            .then(function (res) {
                alert("Success");
                window.location.href = 'submitform.html';
            })
    } else {
        alert("Please fill in all required fields.");
    }
}
function alert(message) {
    // Update the content of the message container
    var messageContainer = document.getElementById('message');
    messageContainer.textContent = message;
}
