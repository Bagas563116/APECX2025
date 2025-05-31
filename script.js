const navbar = document.querySelector(".navbar");

document.querySelector("#hamburger").onclick = () => {
  navbar.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
