const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

gsap.from(".nadpis", { opacity: 0, duration: 2, ease: "power1.inOut" });

gsap.from(".podnadpis", { opacity: 0, duration:7, ease: "power1.inOut" });