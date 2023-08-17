// Boton modo nocturno
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle")
const sunIcon = document.querySelector(".toggle .fa-sun");
const moonIcon = document.querySelector(".toggle .fa-moon");

toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "fa-solid fa-sun" ? "fa-solid fa-sun" : "fa-solid fa-sun";
    moonIcon.className = moonIcon.className == "fa-regular fa-moon" ? "fa-regular fa-moon" : "fa-regular fa-moon";
})

