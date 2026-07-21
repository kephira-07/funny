const bar = document.querySelector("nav");
let valeur = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY > valeur) {
        bar.style.top = "-70px";
    } else {
        bar.style.top = "0";
    }
    valeur = window.scrollY;
});
