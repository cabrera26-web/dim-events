let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector("header .navbar");

window.onscroll = () => {
    Navbar.classList.remove("active");
    MenuBtn.classList.remove("fa-times");
}

MenuBtn.onclick = () => {
    MenuBtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active");
};

//Swiper.js//
var swiper = new Swiper(".ReviewSlider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Theme Toggle
let themeToggle = document.querySelector(".themeToggle");
let toggleBtn = document.querySelector(".toggleBtn");
toggleBtn.onclick = () => {
    themeToggle.classList.toggle("active");
};

// Main Logic
document.querySelectorAll(".themeToggle .theme-btn").forEach((btn) => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--main", color);
    };
})