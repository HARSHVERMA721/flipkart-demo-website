let mainimg = document.getElementById("main-img");
let smallimg = document.querySelectorAll(".small-pictures");

smallimg.forEach((img) => {
  img.addEventListener("click", () => {
    mainimg.src = img.src;
  });

  img.addEventListener("mouseover", () => {
    mainimg.src = img.src;
  });
});
