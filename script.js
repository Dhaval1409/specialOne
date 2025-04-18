// Scroll animations
gsap.registerPlugin(ScrollTrigger);

gsap.from("#welcome h1", {
  scrollTrigger: "#welcome",
  opacity: 0,
  y: 50,
  duration: 2,
  ease: "power2.out"
});

function showWish() {
  document.getElementById("hiddenWish").style.display = "block";
}

function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 3000);
  }
  
  // Launch one every 8–15 seconds randomly
  setInterval(() => {
    if (Math.random() > 0.5) createShootingStar();
  }, 8000);
  
