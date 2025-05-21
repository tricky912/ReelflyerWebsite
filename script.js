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
 
  const phone = document.getElementById("scrollingPhone");
  if (!phone) return;

  let currentTop = 100; // px from top when scrollY = 0

  function animatePhone() {
    const scrollY   = window.scrollY; 
    const targetTop = 100 + scrollY * 0.5; // adjust 0.5 to change pull strength

    // Only move down (never up)
    if (targetTop > currentTop) {
      // ease the movement
      currentTop += (targetTop - currentTop) * 0.1;
      phone.style.top = currentTop + "px";
    }

    requestAnimationFrame(animatePhone);
  }

  animatePhone();
});

