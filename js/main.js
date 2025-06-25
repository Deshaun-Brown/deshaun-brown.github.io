document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header .navbar");

  navbar.addEventListener("mousemove", (e) => {
    const rect = navbar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    navbar.style.setProperty("--x", `${x}px`);
    navbar.style.setProperty("--y", `${y}px`);
  });

});

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {toggle: false})
navLinks.forEach((l) => {
    if (menuToggle.classList.contains('show')) {  // only fire on mobile
        l.addEventListener('click', () => { 
            bsCollapse.toggle() 
        })
    }
})