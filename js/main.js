
const header = document.getElementById("header")
const menuBtn = document.getElementById("bar-ico")
const responsiveMenu = document.querySelector("#header .responsive-menu");

menuBtn.onclick = function(){
  responsiveMenu.classList.toggle("active-menu")
}


window.onscroll = function(){
   
   if (window.scrollY>=300) {
    header.classList.add("active-header")
   }
   else{
    header.classList.remove("active-header")
   }
   
}





// sade-Slider Start

// sekillerimi arrayda saxlayiram
const images = [
  'image/1.jpg',
  'image/2.jpg',
  'image/3.jpg',
  'image/4.jpg'
]

// html-de img tagimi-tapiram ve deyiskene beraber edirem
let slideImg = document.querySelector("#slider-box img");
// qabaga getmek iconumu html-de tapiram ve deyiskene beraber edirem
let nextBtn = document.querySelector("#slider-box .next i");
// geriye getmek iconumu html-de tapiram ve deyiskene beraber edirem
let prevBtn = document.querySelector("#slider-box .prev i");

// bidene deyisken teyin edirem default 0 otururem
let currentSlider = 0;

// deyirem ki htmlde tapib deyiskene beraber elediyim img taginin src atributunu
// beraber edirem yuxarda teyin etdiyim images arrayimin current slidena cunki
// her defe sekil artdiqca img tagimin srcsine beraber edirem
slideImg.src = images[currentSlider] // bunu globalda ona gore yaziram ki ilk defe sayt acilanda 1ci sekil gorunsun



//kod tekrarciliginin qarsini almaq ucun funksiya teyin edib nextBtn-ne onclick olanda cagiririq
function nextSlide(){
  currentSlider++;
  if (currentSlider>=images.length) {
     currentSlider=0;
  }
  slideImg.src = images[currentSlider]
}
//kod tekrarciliginin qarsini almaq ucun funksiya teyin edib prevBtn-ne onclick olanda cagiririq
function prevSlide(){
  currentSlider--;

  if (currentSlider===-1) {
     currentSlider = images.length-1
     console.log(currentSlider);
  }
  slideImg.src = images[currentSlider]
}

nextBtn.onclick = function(){
   intervalSlide(false);
   nextSlide();
  setTimeout(function(){
   intervalSlide(true);
  },5000)
  
}
prevBtn.onclick = function(){
  intervalSlide(false);
  prevSlide();
  setTimeout(function(){ // setTimeOut belli bir saniyeden sonra ise dusur
    intervalSlide(true);
   },5000)
}

let intervalFunc = null;

function intervalSlide(loop){
  if (loop) {
    intervalFunc= setInterval(function(){ // setInterval verdiyimiz saniye araligindan bir isleyir
      nextSlide()
     },2000)
  }
  else{
    clearInterval(intervalFunc)
  }
}


intervalSlide(true);






// setTimeOut temilemek ucunde clearTimeOut()

// setInterval  temizlemek ucunde clearInterval()

