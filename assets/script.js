document.getElementById("y")?.append(new Date().getFullYear());

const carouselItems = document.querySelectorAll(".carousel-item");
const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");

if (carouselItems.length && nextButton && prevButton) {
  let currentIndex = 0;

  const showSlide = (index) => {
    carouselItems.forEach((item) => item.classList.remove("active"));
    carouselItems[index].classList.add("active");
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
}
