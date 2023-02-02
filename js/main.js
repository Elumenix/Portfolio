"use strict";

let body = document.querySelector("body");
let skirmish = document.querySelector("#card-spaceway-skirmish");
let crossboa = document.querySelector("#card-crossboa");
let modals = document.querySelectorAll(".modal");
let projectCards = document.querySelectorAll(".project-card");
let currentModal;


// Send each card to its respective page
window.onload = () => {
skirmish.onclick = () => { window.location.href = "SpacewaySkirmish.html";};
crossboa.onclick = () => { window.location.href = "Crossboa.html";};
}

// set up project card click events
projectCards.forEach(card => card.onclick = e => {
      if (document.querySelector("#modal-" + card.id.substring(card.id.indexOf("-") + 1)) != null) {
            let modal = document.querySelector("#modal-" + card.id.substring(card.id.indexOf("-") + 1));
            modal.style.display = "block";
            body.style.overflow = "hidden";
            currentModal = modal;
      }
});

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
function closeModal(modal) {
      modal.style.display = "none";
      body.style.overflow = "scroll";
      currentModal = null;
}
