const perfil = document.querySelector(".perfil");
const overlay = document.querySelector(".perfil-overlay");
const menuBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
  perfil.classList.toggle("active");

  overlay.classList.toggle("active");
});

/* Quando clicado, fecha */

overlay.addEventListener("click", () => {
  perfil.classList.remove("active");

  overlay.classList.remove("active");
});

/* Fecha quando tá na tela desktop */

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1025) {
    perfil.classList.remove("active");

    overlay.classList.remove("active");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
