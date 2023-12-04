// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika baksourat menu di klik
document.querySelector("#baksourat-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav
const baksourat = document.querySelector("#baksourat-menu");

document.addEventListener("click", function (e) {
  if (!baksourat.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
