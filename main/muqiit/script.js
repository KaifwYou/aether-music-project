// script.js

console.log("Portfolio loaded successfully!");

/* CARD CLICK EFFECT */
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("click", () => {

    card.classList.add("active");

    setTimeout(() => {
      card.classList.remove("active");
    }, 150);

  });

});

/* SCROLL REVEAL */
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

});

hiddenElements.forEach((el) => {
  observer.observe(el);
});