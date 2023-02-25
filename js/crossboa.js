window.onload = () => {
  // Get the modal
  let modal = document.getElementById("popModal");
  let musicModal = document.getElementById("musicModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  let img = [document.querySelector("#architecture"), document.querySelector("#states"), document.querySelector("#slime"), document.querySelector("#trello")];
  let modalImg = document.getElementById("flowChart");
  let captionText = document.getElementById("caption");

  const header = document.querySelector('header');
  const scrollFactor = .01;

  window.addEventListener('scroll', function () {
    let translateValue = (scrollFactor * 60) * window.scrollY;

    header.style.transform = `translateY(${translateValue}px)`;
  });

  for (i = 0; i < img.length; ++i) {
    img[i].onclick = (e) => {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      captionText.innerHTML = e.target.alt;
    }
  }


  // Get the <span> element that closes the modal
  let span = document.querySelectorAll(".close");

  // When the user clicks on <span> (x), close the modal
  for (let i = 0; i < span.length; i++) {
    span[i].onclick = () => {
      modal.style.display = "none";
      musicModal.style.display = "none";
    }
  }

  var linkElementId = 'ogg';
  var linkElement = document.getElementById(linkElementId);

  if (linkElement) {
    // Add click event listener to the link element.
    linkElement.addEventListener('click', playAudio);
  } else {
    alert('A link element with the ' + linkElementId + ' id could not be found!');
  }
};


const playAudio = () => {
  musicModal.style.display = "block";
}

