const nav = document.querySelector(".nav-items");
const navItems = document.querySelectorAll(".nav-items li");
const hamburger = document.querySelector(".hamburger");

function navItemSlides() {
    navItems.forEach((item, index) => {
        if(item.style.animation){
            item.style.animation = "";
        } else {
            item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }
    });
}

const navSlide = () => {
    hamburger.addEventListener("click", () => {
        // slide out nav bar
        nav.classList.toggle("nav-active");
        // populate links, reset animation every time menu is opened
        navItemSlides();
        // turn hamburger into "X" when clicked
        hamburger.classList.toggle("toggle");
    })   
}

navSlide();


window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.pageYOffset > 0) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }
} )


// to make Navbar slide back in after clicking nav items
for (i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        hamburger.classList.toggle("toggle");
        navItemSlides();
    });
}