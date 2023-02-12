window.onload = () => {
// Get the modal
let modal = document.getElementById("popModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = [document.querySelector("#architecture"), document.querySelector("#states")];
let modalImg = document.getElementById("flowChart");
let captionText = document.getElementById("caption");

for (i = 0; i < img.length; ++i) {
    img[i].onclick = (e) =>{
        modal.style.display = "block";
        modalImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;
      }
}


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
};