
// Navigation of the hamburger menu on small and extra small screens
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector( ".nav-menu" );
const sendLetter = document.getElementById( 'send-letter' );

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


sendLetter.addEventListener( "click", () => {
    window.location = window.location.href;
});