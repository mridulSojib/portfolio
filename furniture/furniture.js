const navbarBtn =document.querySelector(".nav-toggle");
const navShow = document.querySelector(".collapse");


navbarBtn.addEventListener("click", function(){
  navShow.classList.toggle("collapse");
});