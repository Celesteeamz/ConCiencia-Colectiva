function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
let current = 0;

const slides = document.querySelectorAll(".slide");
const title = document.getElementById("projectTitle");

const projectNames = [
  "AR-mate",
  "Sparky",
  "ConCiencia Colectiva"
];

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");


  title.textContent = projectNames[index];
}

document.querySelector(".next").onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
};

document.querySelector(".prev").onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};
