// Animation on scroll
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section");
  const scrollY = window.scrollY + window.innerHeight - 100;

  elements.forEach(el => {
    if (scrollY > el.offsetTop) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// Initial fade animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
  });
});
function updateLine() {
  const options = {
    timeZone: 'Asia/Kathmandu',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  const now = new Date();
  const formatted = new Intl.DateTimeFormat('en-US', options).format(now);

  const line = `🚀 BCA Second Semester Student fueled by a passion for cybersecurity and a mission to protect the digital world. | 🛡️ Aspiring Cybersecurity Expert | Building a future in ethical hacking and digital defense. | ⏰ Nepal Time: ${formatted}`;

  document.getElementById("scrollText").textContent = line;
}
setInterval(updateLine, 1000);
updateLine();
