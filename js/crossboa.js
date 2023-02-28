window.onload = () => {
  // Get the modal
  let modal = document.querySelector("#pop-modal");
  let musicModal = document.querySelector("#music-modal");
  let i;

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  let img = [document.querySelector("#architecture"), document.querySelector("#states"), document.querySelector("#slime"), document.querySelector("#trello")];
  let modalImg = document.querySelector("#flow-chart");
  let captionText = document.querySelector("#caption");

  const header = document.querySelector("header");
  const scrollFactor = 0.01;

  window.addEventListener("scroll", function () {
    let translateValue = (scrollFactor * 60) * window.scrollY;

    header.style.transform = `translateY(${translateValue}px)`;
  });

  for (i = 0; i < img.length; i += 1) {
    img[i].onclick = (e) => {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      captionText.innerHTML = e.target.alt;
    };
  }

  const playAudio = () => {
    musicModal.style.display = "block";
  };

  // Get the <span> element that closes the modal
  let span = document.querySelectorAll(".close");

  // When the user clicks on <span> (x), close the modal
  for (i = 0; i < span.length; i += 1) {
    span[i].onclick = () => {
      modal.style.display = "none";
      musicModal.style.display = "none";
    };
  }

  let linkElementId = "ogg";
  let linkElement = document.querySelector(`#` + linkElementId);

  if (linkElement) {
    // Add click event listener to the link element.
    linkElement.addEventListener("click", playAudio);
  } else {
    alert("A link element with the " + linkElementId + " id could not be found!");
  }
};
