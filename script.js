document.addEventListener("DOMContentLoaded", () => {
  const text = "Speed Meets Story";
  const typedText = document.getElementById("typed-text");
  const cursor = document.getElementById("cursor");
  let index = 0;

  function typeChar() {
    if (index < text.length) {
      typedText.textContent += text[index];

      // Move cursor to end of typed text
      if (cursor) {
        cursor.style.left = typedText.offsetWidth + "px";
      }

      index++;
      setTimeout(typeChar, 150);
    }
  }

  typeChar();

 const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
 document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

  const phone = document.getElementById("scrollingPhone");
if (!phone) return;

let currentTop = 100;
function animatePhone() {
  const scrollY = window.scrollY;
  const targetTop = 100 + scrollY * 1;
  currentTop += (targetTop - currentTop) * 0.9; // Lower for smoother, higher for faster
  phone.style.top = Math.round(currentTop) + "px";
  requestAnimationFrame(animatePhone);
}
animatePhone();


});