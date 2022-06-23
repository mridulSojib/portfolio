document.querySelector(".mobile-menu-icon").addEventListener("click",function(){

    this.querySelector("i").classList.toggle("fa-times");

    document.querySelector(".topBarWrapper").classList.toggle("hideMain");

    document.querySelector(".login-bar button").classList.toggle("hideLogin");

    document.querySelector(".signup-bar button").classList.toggle("hideSignup");


    

    

    document.querySelector(".topBarWrapper").classList.toggle("showMainMenu");

    document.querySelector(".login-bar button").classList.toggle("showLogin");
  
    document.querySelector(".signup-bar button").classList.toggle("showSignup");

});




const subMenuOpen = document.querySelector(".another");

subMenuOpen.addEventListener("click",function(){
    this.querySelector("i").classList.toggle("fa-angle-up");
    this.querySelector("ul").classList.toggle("submenu");
});



$(document).ready(function(){
    $(".login-info input").attr("title","this is email input box");
  });



  const topLink = document.querySelector(".top-link");


window.addEventListener("scroll", function(){
  const scrollHeight = window.pageYOffset;
 
  if(scrollHeight > 800){
    topLink.classList.add("show-link")
  }else{
    topLink.classList.remove("show-link")
  }
  });
