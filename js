/* -----------------------------------------------------------
   אתחול EmailJS
----------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("YOUR_PUBLIC_KEY"); // הכנס כאן את המפתח שלך
});

/* -----------------------------------------------------------
   תפריט ניווט במובייל
----------------------------------------------------------- */
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

/* -----------------------------------------------------------
   סליידר HERO ראשי
----------------------------------------------------------- */
let heroIndex = 0;
const heroSlides = document.querySelectorAll(".hero-slide");
const heroPrev = document.querySelector(".hero-prev");
const heroNext = document.querySelector(".hero-next");

function showHeroSlide(n) {
  heroSlides.forEach((slide) => slide.classList.remove("active"));
  heroSlides[n].classList.add("active");
}

function nextHero() {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  showHeroSlide(heroIndex);
}

function prevHero() {
  heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
  showHeroSlide(heroIndex);
}

if (heroNext) heroNext.addEventListener("click", nextHero);
if (heroPrev) heroPrev.addEventListener("click", prevHero);

setInterval(nextHero, 6000); // מעבר אוטומטי כל 6 שניות

/* -----------------------------------------------------------
   סליידר משני (תמונה מתחלפת)
----------------------------------------------------------- */
const sliderImg = document.getElementById("image-slider");
let sliderIndex = 1;

function changeSliderImage() {
  sliderIndex++;
  if (sliderIndex > 12) sliderIndex = 1;
  sliderImg.src = `images/${sliderIndex}.jpg`;
}

setInterval(changeSliderImage, 5000);

/* -----------------------------------------------------------
   מודל יצירת קשר
----------------------------------------------------------- */
const contactModal = document.getElementById("contactModal");
const openContactModal = document.getElementById("openContactModal");
const closeModal = document.querySelector(".close");

if (openContactModal) {
  openContactModal.addEventListener("click", () => {
    contactModal.style.display = "flex";
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

/* -----------------------------------------------------------
   שליחת טופס עם EmailJS
----------------------------------------------------------- */
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_xxx", "template_xxx", this)
      .then(() => {
        toast.innerText = "הטופס נשלח בהצלחה!";
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);

        contactForm.reset();
      })
      .catch(() => {
        toast.innerText = "שגיאה בשליחה, נסו שוב.";
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);
      });
  });
}

/* -----------------------------------------------------------
   תפריט נגישות
----------------------------------------------------------- */
const a11yBtn = document.getElementById("accessibility-btn");
const a11yMenu = document.getElementById("accessibility-menu");

if (a11yBtn) {
  a11yBtn.addEventListener("click", () => {
    a11yMenu.classList.toggle("open");
  });
}

function toggleGrayscale() {
  document.body.classList.toggle("grayscale");
}

function toggleHighContrast() {
  document.body.classList.toggle("high-contrast");
}

function changeFontSize(amount) {
  const current = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  document.documentElement.style.fontSize = current + amount + "px";
}

function resetA11y() {
  document.body.classList.remove("grayscale", "high-contrast");
  document.documentElement.style.fontSize = "";
}

/* -----------------------------------------------------------
   מצב לילה (Dark Mode)
----------------------------------------------------------- */
const modeToggle = document.getElementById("modeToggle");

if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

/* -----------------------------------------------------------
   FAB Menu – תפריט מהיר
----------------------------------------------------------- */
const fabMenu = document.getElementById("fabMenu");
const fabMain = document.getElementById("fabMain");
const backToTop = document.getElementById("backToTop");

if (fabMain) {
  fabMain.addEventListener("click", () => {
    fabMenu.classList.toggle("open");
  });
}

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* -----------------------------------------------------------
   ROOM POPUP – חדרי SEO נוספים
----------------------------------------------------------- */
const room = document.getElementById("room");
const roomInner = document.getElementById("room-inner");

function openRoom(title, content) {
  roomInner.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;
  room.style.display = "flex";
}

function closeRoom() {
  room.style.display = "none";
}

/* דוגמה: פתיחת חדר SEO מתוך כפתור */
document.querySelectorAll("[data-room]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const title = btn.getAttribute("data-title");
    const content = btn.getAttribute("data-content");
    openRoom(title, content);
  });
});

/* -----------------------------------------------------------
   אפקטים קטנים – שיפור UX
----------------------------------------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    fabMain.style.transform = "scale(1)";
  } else {
    fabMain.style.transform = "scale(0.9)";
  }
});
