let menuel = document.querySelector(".menu");
let icon = document.querySelector(".menu i")
let links = document.querySelector(".element");
let dark = document.querySelector(".frist");
let logo = document.querySelector(".logo");
let moon = document.querySelector(".moon");

menuel.onclick = function() {
    links.classList.toggle("active")
    if (links.classList.contains("active")) {
        icon.classList.add("fa-x")
        icon.classList.remove("fa-bar")
    } else {
        icon.classList.remove("fa-x")
        icon.classList.add("fa-bar")

    }
}
let continerel = document.querySelector(".continer");
let element = ["My Name Alex Smith", "Freelancer", "Developer", "Youtuober"];
let elementindex = 0;
let elementchar = 0;
updatetext()

function updatetext() {
    elementchar++;
    continerel.innerHTML = `<h2>Im  ${element[elementindex].slice(0,1)==="I" ? "an":"a"}${element[elementindex].slice(0,elementchar)}</h1>`
    if (elementchar === element[elementindex].length) {
        elementindex++;
        elementchar = 0
    }
    if (elementindex === element.length) {
        elementindex = 0
    }
    setTimeout(updatetext, 200)

}
// main.js

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleNightMode = document.getElementById('toggle-night-mode');

    toggleNightMode.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
    });
});