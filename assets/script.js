// Année auto dans le footer
document.getElementById('y')?.append(new Date().getFullYear());
const items = document.querySelectorAll('.carousel-item');
let index = 0;

function showSlide(i) {
  items.forEach(item => item.classList.remove('active'));
  items[i].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % items.length;
  showSlide(index);
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  showSlide(index);
});

// afficher la première
showSlide(index);