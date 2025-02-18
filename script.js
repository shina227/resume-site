const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.togggle('bx-x');
    nav.classList.toggle('active');
}