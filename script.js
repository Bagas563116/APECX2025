// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("APEC 2025 website loaded successfully!");

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.getElementById("nav-links"); // Menggunakan ID yang benar

  // Menambahkan event listener untuk hamburger menu
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active"); // Toggle class 'active' untuk menampilkan/menyembunyikan menu
  });

  // Menambahkan efek hover pada kartu
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "0.3s";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });

  // Menangani pengiriman form
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for registering!");
    });
  }
});
