

// גלילה למעלה
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// מצגת תמונות
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000);

// וואטסאפ צ'אט
document.getElementById('whatsapp-chat').addEventListener('click', () => {
  window.open('https://wa.me/972584181598', '_blank');
});


