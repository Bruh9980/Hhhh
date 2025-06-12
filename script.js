// Dark mode toggle
document.getElementById("dark-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Ketikan animasi
new TypeIt("#typewriter", {
  speed: 50,
  loop: true
})
.type("Gamers.")
.pause(1000)
.delete(7)
.type("Web Developer.")
.pause(1000)
.delete(15)
.type("Suka Bikin Game.")
.pause(1000)
.delete()
.go();

// Scroll animation
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  reset: true
});

// Particles.js config
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#00bcd4" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 150, color: "#00bcd4", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});