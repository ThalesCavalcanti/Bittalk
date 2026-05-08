const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".perfil");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {
    menu.classList.remove("active");
  }

});

document.getElementById("year").textContent = new Date().getFullYear();