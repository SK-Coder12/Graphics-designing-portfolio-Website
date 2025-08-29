// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const toggleBtn = document.getElementById("btn");
const body = document.body;

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "Switch to Dark Mode";
  } else {
    toggleBtn.textContent = "Switch to Light Mode";
  }
});
