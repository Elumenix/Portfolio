"use strict";



let body;
//let skirmish = document.querySelector("#card-spaceway-skirmish");
let crossboa;
let modals;
let projectCards;
let email;
let linkedIn;
let currentModal;

window.addEventListener('load', function () {
      body = document.querySelector("body");
      crossboa = document.querySelector("#card-crossboa");
      modals = document.querySelectorAll(".modal");
      projectCards = document.querySelectorAll(".project-card");
      email = document.querySelector("#email");
      linkedIn = document.querySelector("#linked");

     

      // Contact information
      email.onclick = () => { window.location.href = "mailto:dps5393@rit.edu"; };
      linkedIn.onclick = () => { window.open("https://www.linkedin.com/in/donovanscullion/", '_blank'); };


      // set up project card click events
projectCards.forEach(card => card.onclick = e => {
      if (document.querySelector("#modal-" + card.id.substring(card.id.indexOf("-") + 1)) != null) {
            let modal = document.querySelector("#modal-" + card.id.substring(card.id.indexOf("-") + 1));
            modal.style.display = "block";
            body.style.overflow = "hidden";
            currentModal = modal;
      }
});

crossboa.onclick = () => { window.location.href = "/crossboa.html"; };

// set up a way to close the modals
for (let modal of modals) {
      modal.querySelector(".modal-close").onclick = () => closeModal(modal);
}
window.onclick = e => {
      for (let modal of modals) {
            if (e.target == modal) {
                  closeModal(modal);
            }
      }
};

// closes a modal
const closeModal = (modal) => {
      modal.style.display = "none";
      body.style.overflow = "scroll";
      currentModal = null;
}

});