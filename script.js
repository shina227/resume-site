// Selecting elements
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

// Toggle mobile navigation
menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle("active");
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".links a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menu.classList.remove("bx-x");
    });
});

// Smooth scrolling for nav links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});


// Home page text animation effect
const text = "Hi, I'm Shina, an aspiring Software Engineer";
let i = 0;
function typeEffect() {
    const introText = document.getElementById("intro-text");
    introText.innerHTML = "";
    function type() {
        if (i < text.length) {
            introText.innerHTML += text[i];
            i++;
            setTimeout(type, 60);
        }
    }
    type();
}

window.onload = typeEffect;