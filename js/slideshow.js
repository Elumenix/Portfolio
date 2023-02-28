class Slideshow {
  constructor(slideIndex, slideClassName, dotClassName, captionId, btnClass) {
    this.slideIndex = slideIndex;
    this.slideClassName = slideClassName;
    this.dotClassName = dotClassName;
    this.captionId = captionId;
    this.doit = null;
    this.showSlides(this.slideIndex);
    document.querySelectorAll(`.prev${btnClass}`).forEach((btn) => {
      btn.addEventListener('click', () => this.plusSlides(-1));
    });
    document.querySelectorAll(`.next${btnClass}`).forEach((btn) => {
      btn.addEventListener('click', () => this.plusSlides(1));
    });

    window.addEventListener('resize', () => {
      clearTimeout(this.doit);
      this.doit = setTimeout(this.resizedw, 100);
    });
  }

  plusSlides = (n) => {
    this.showSlides(this.slideIndex += n);
  };

  currentSlide = (n) => {
    this.showSlides(this.slideIndex = n);
  };

  showSlides = (n) => {
    const slides = document.querySelectorAll(this.slideClassName);
    const dots = document.querySelectorAll(this.dotClassName);
    const captionText = document.querySelector(this.captionId);
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    slides[this.slideIndex - 1].style.display = "block";
    slides[this.slideIndex - 1].style.backgroundColor = "black";

    dots[this.slideIndex - 1].classList.add("active");
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
  };

  resizedw = () => {
    this.showSlides(this.slideIndex);
  }
}

window.addEventListener('load', function () {
  const slideshow1 = new Slideshow(1, ".my-slides-1", ".demo-1", "#caption-1", ".slides-1");
  const slideshow2 = new Slideshow(1, ".my-slides-2", ".demo-2", "#caption-2", ".slides-2");
});
