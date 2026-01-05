document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".banner-container");
  const banners = document.querySelectorAll(".banner");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;

  function updateSlider() {
    container.style.transform = `translateX(-${index * 100}%)`;

    // Disable buttons at boundaries
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === banners.length - 1;
  }

  nextBtn.addEventListener("click", () => {
    if (index < banners.length - 1) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  // Initial setup
  updateSlider();
});

setInterval(() => {
  document.querySelector(".next").click();
}, 4000);
