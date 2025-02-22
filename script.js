document.addEventListener("DOMContentLoaded", () => {
  console.log("APEX 2025 website loaded successfully!");

  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "0.3s";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for registering!");
    });
  }
});
