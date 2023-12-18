const Mostrarmenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle);
  const nav = document.getElementById(navbarId);
  if (headerToggle && navbarId) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      toggleBtn.classList.toggle("bx-x");
    });
  }
};
Mostrarmenu("header-toggle", "navbar");


const linkcolor = document.querySelectorAll(".nav__link");
function colorLink() {
  linkcolor.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
linkcolor.forEach((item) => item.addEventListener("click", colorLink));
