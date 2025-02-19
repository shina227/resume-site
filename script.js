// Selecting elements
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav ul");

// Toggle mobile navigation
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".links a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menu.classList.remove("bx-x");
    });
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Home page text animation
const text = "Hi, I'm Shina, an aspiring Software Engineer";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("intro-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}
window.onload = typeEffect;

// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.querySelector("input[placeholder='Enter Your Full Name']").value.trim();
    let email = document.querySelector("input[placeholder='Enter Your Email']").value.trim();
    let message = document.querySelector("input[placeholder='Enter Your Message']").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }
    
    alert("Thank you! Your message has been sent.");
});
