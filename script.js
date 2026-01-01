<script>
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;

      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
</script>
