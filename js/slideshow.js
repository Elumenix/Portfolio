class Slideshow {
  constructor(slideIndex, slideClassName, dotClassName, captionId, btnClass) {
    this.slideIndex = slideIndex;
    this.slideClassName = slideClassName;
    this.dotClassName = dotClassName;
    this.captionId = captionId;
    this.doit;
    this.showSlides(this.slideIndex);
    document.querySelectorAll(`.prev` + btnClass).forEach((btn) => {
      btn.onclick = () => this.plusSlides(-1);
    });
    document.querySelectorAll(`.next` + btnClass).forEach((btn) => {
      btn.onclick = () => this.plusSlides(1);
    });
    let items = document.querySelectorAll(this.dotClassName);
    let i;
    for (i = 0; i < items.length - 1; i++) {
      items[i].onclick = () => this.currentSlide(i + 1);
    }
    items[i].onclick = () => this.currentSlide(0);
    window.onresize = () => {
      clearTimeout(this.doit);
      this.doit = setTimeout(this.resizedw, 100);
    };
  }

  plusSlides = (n) => {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide = (n) => {
    this.showSlides(this.slideIndex = n);
  }

  showSlides = (n) => {
    let i;
    let slides = document.querySelectorAll(this.slideClassName);
    let dots = document.querySelectorAll(this.dotClassName);
    let captionText = document.querySelector(this.captionId);
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    slides[this.slideIndex - 1].style = "background-color:black";

  
    dots[this.slideIndex - 1].className += " active";
    if (this.slideIndex - 1 != 0) {
      // Keeps aspect ratio of image
      slides[this.slideIndex - 1].style.width = "auto";
      slides[0].style.display = "block";
      slides[this.slideIndex - 1].querySelector("img").style.maxHeight = `${slides[0].querySelector("img").height}px`;
      slides[this.slideIndex - 1].querySelector("img").style.display = "flex";
      slides[this.slideIndex - 1].querySelector("img").style.margin = "0px auto"; // Center smaller images
      slides[0].style.display = "none";
    }
    captionText.innerHTML = dots[this.slideIndex - 1].alt;
  }

  resizedw = () => {
    this.showSlides(this.slideIndex);
  }
}

window.addEventListener('load', function (){
  const slideshow1 = new Slideshow(1, ".mySlides1", ".demo1", "#caption1", "#slides1");
  const slideshow2 = new Slideshow(1, ".mySlides2", ".demo2", "#caption2", "#slides2");
});

