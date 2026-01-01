// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerPoint = window.innerHeight - 100;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run once on page load
document.addEventListener("DOMContentLoaded", revealOnScroll);


// ================= MOBILE NAVBAR =================
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}


