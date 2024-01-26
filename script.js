let navLinks = document.querySelectorAll('.nav-link');

let menuToggle = () => {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('appear');
    }
}