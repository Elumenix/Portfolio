class Slideshow {
  constructor(slideIndex, slideClassName, dotClassName, captionId) {
    this.slideIndex = slideIndex;
    this.slideClassName = slideClassName;
    this.dotClassName = dotClassName;
    this.captionId = captionId;
    this.doit;

    this.showSlides(this.slideIndex);


    document.querySelectorAll(".prev").onclick = () => this.plusSlides(-1);
    document.querySelectorAll(".next").onclick = () => this.plusSlides(1);

    let items = document.querySelectorAll(this.dotClassName);
    let i;

    // First several elements
    for (i = 0; i < items.length - 1; i++) {
      items[i].onclick = () => this.currentSlide(i + 1);
    }

    // Final Element 
    items[i].onclick = () => this.currentSlide(0);

    window.onresize = () => {
      clearTimeout(this.doit);
      this.doit = setTimeout(this.resizedw, 100);
    };
  }

  // Next/previous controls
  plusSlides = (n) => {
    this.showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide = (n) => {
    this.showSlides(slideIndex = n);
  }

  showSlides = (n) => {
    let i;
    let slides = document.querySelectorAll(this.slideClassName);
    let dots = document.querySelectorAll(this.dotClassName);
    let captionText = document.querySelector(this.captionId);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";

    if (this.slideIndex - 1 != 0) {
      // Keeps aspect ratio of image
      slides[this.slideIndex - 1].style.width = "auto";
      //slides[slideIndex - 1].querySelector("img").style.margin.left = "auto";
      //slides[slideIndex - 1].querySelector("img").style.margin.right = "auto";


      // This makes it so that height of image 1 is relative to dom, not it's internal size
      slides[0].style.display = "block";
      slides[this.slideIndex - 1].querySelector("img").style.maxHeight = `${slides[0].querySelector("img").height}px`;
      slides[this.slideIndex - 1].querySelector("img").style.display = "flex";
      slides[this.slideIndex - 1].querySelector("img").style.margin = "0px auto"; // Center smaller images
      slides[0].style.display = "none";
    }

    captionText.innerHTML = dots[this.slideIndex - 1].alt;
  }


  // Resizes images on a timer
  resizedw = () => {
    // Haven't resized in 100ms!
    this.showSlides(this.slideIndex);
  }
}

window.onload = () => {
  const slideshow1 = new Slideshow(1, ".mySlides1", ".demo1", "#caption1");
  const slideshow2 = new Slideshow(1, ".mySlides2", ".demo2", "#caption2");
}
