// activating the hamburger and navigation
const hamburger = document.querySelector(".hamb");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navlinks.classList.toggle("open");
})