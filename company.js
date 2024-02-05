let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
   link.addEventListener("click", () => {
     navLinks.forEach(ele => ele.classList.remove("active"));
     link.classList.add("active"); 
   });
});

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  })
