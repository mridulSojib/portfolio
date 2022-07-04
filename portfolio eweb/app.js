(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();


const dark = document.querySelector(".theme-btn");
const target = document.querySelector(".main-content");

dark.addEventListener("click",function(){
    target.classList.toggle("dark-theme")
});