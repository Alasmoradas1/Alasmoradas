document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const navList = document.querySelector(".nav__list");

  // Alternar menú y accesibilidad
  navToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
  });

  // Cierra el menú al hacer clic en un enlace
  document.querySelectorAll(".nav__link").forEach(link =>
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  // Formulario
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
    contactForm.reset();
  });

  // Botón volver arriba
  const btnBackToTop = document.getElementById("btn-back-to-top");

  window.addEventListener("scroll", function () {
    btnBackToTop.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  btnBackToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
