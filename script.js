const menuButton = document.querySelector(".menu");
const burgers = document.getElementsByClassName
("burger");

menuButton.addEventListener("click", () => {
    burgers[0].classList.toggle("rotate-1");
    burgers[1].classList.toggle("hide");
    burgers[2].classList.toggle("rotate-2");
    Content.classList.toggle("show");

});