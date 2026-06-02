// Simple welcome message
console.log("Portfolio website loaded successfully!");

// Example interaction
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    alert("You clicked on a project card!");
  });
});