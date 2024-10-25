const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

gsap.from(".nadpis", { opacity: 0, duration: 2, ease: "power1.inOut" });

gsap.from(".podnadpis", { opacity: 0, duration:5, ease: "sine.in", });

console.clear();

const rightColumn = document.querySelector(".right-container");
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".center",
    markers:false,
    start: "0 0",
    end: "+=2000",
    pin: true,
    scrub: true
  }
});

tl.to(rightColumn, {
  y: window.innerHeight - rightColumn.scrollHeight,
  ease: "none"
});
