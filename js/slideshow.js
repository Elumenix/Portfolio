let slideIndex = 1;
showSlides(slideIndex);
let images = document.getElementsByClassName("mySlides");

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  if (slideIndex - 1 != 0) {
    // Keeps aspect ratio of image
    slides[slideIndex - 1].style.width = "auto";
    //slides[slideIndex - 1].querySelector("img").style.margin.left = "auto";
    //slides[slideIndex - 1].querySelector("img").style.margin.right = "auto";


    // This makes it so that height of image 1 is relative to dom, not it's internal size
    slides[0].style.display = "block";
    slides[slideIndex - 1].querySelector("img").style.maxHeight = `${slides[0].querySelector("img").height}px`;
    slides[slideIndex - 1].querySelector("img").style.display = "flex";
    slides[slideIndex - 1].querySelector("img").style.margin = "0px auto"; // Center smaller images
    slides[0].style.display = "none";
  }

  captionText.innerHTML = dots[slideIndex - 1].alt;
} 


// Resizes images on a timer
function resizedw(){
  // Haven't resized in 100ms!
  showSlides();
}

var doit;
window.onresize = function(){
clearTimeout(doit);
doit = setTimeout(resizedw, 100);
};
