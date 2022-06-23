const mobileMenu = document.querySelector(".nav-toggle");
const menuItem = document.querySelector(".mainmenuitem");
const homeSlider = document.querySelector(".homeslider");



mobileMenu.addEventListener("click", function () {
  menuItem.classList.toggle("menuitem");
  homeSlider.classList.toggle("homesliderhide");
});


const subMenu = document.querySelector(".mainmenuitem")

subMenu.addEventListener("click", function(){
  this.querySelector(".submenu").classList.toggle("showsubMenu");
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








  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const giveaway = document.querySelector(".giveaway");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline-format h4");
  
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDay();
  
  //let futureDate = new Date(2022,5,13,10,45,0);
  const futureDate = new Date(tempYear,tempMonth, + 81,10,35);
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const mins = futureDate.getMinutes();
  
  
  let month = futureDate.getMonth();
  month = months[month];
  
  const date = futureDate.getDate();
  
  let days = futureDate.getDay();
  days = weekdays[days];
  
  
  giveaway.textContent =`giveaway ends on ${days} ${date} ${month} ${year}, ${hours}:${mins}am`;
  
  
  
  // future time in ms
  
  const futureTime = futureDate.getTime();
  
  
  function getRemaningTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  
  
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr
  
  //values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;
  
  let days = t/oneDay;
  days = Math.floor(days)
  
  let hours = Math.floor((t%oneDay)/oneHour);
  
  let min = Math.floor((t%oneHour)/oneMin);
  let sec = Math.floor((t%oneMin)/1000);
  
  //set values array
  const values = [days,hours,min,sec]
  
  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }
  
  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });
  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class=expired>sorry, this giveaway has expired`
  }
  }
  // countdown
  
  let countdown = setInterval(getRemaningTime,1000);
  getRemaningTime()



 /* function change(){


    if(document.getElementsByClassName("homeslider")[0].classList.contains("active")){
      document.getElementsByClassName("homeslider")[1].classList.add("active")
      document.getElementsByClassName("homeslider")[0].classList.remove("active")
      
    }else if(document.getElementsByClassName("homeslider")[1].classList.contains("active")){
      document.getElementsByClassName("homeslider")[0].classList.add("active")
      document.getElementsByClassName("homeslider")[1].classList.remove("active")
    }
  
  }

  setInterval(change,2000);*/