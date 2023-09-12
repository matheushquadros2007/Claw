// SlideShow
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

shuffle(slides);
showSlides();

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  slides[currentIndex].style.display = "block";

  setTimeout(showSlides, 4000); // Trocar a imagem a cada 4 segundos (3000ms)
}
// /SlideShow