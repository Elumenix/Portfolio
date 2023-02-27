"use strict";

let body;
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

      this.document.querySelector("#artista-link").onclick = () => { window.open("https://drive.google.com/file/d/1Vy7Vk7Z--97u6p9W1e8co9mVak-XnMDB/view?usp=sharing", '_blank'); };
      this.document.querySelector("#mood-board-link").onclick = () => { window.open("https://people.rit.edu/dps5393/235/project1/index.html", '_blank'); };
      this.document.querySelector("#ascii-link").onclick = () => { window.open("https://people.rit.edu/dps5393/235/Project2/project2.html", '_blank'); };




      // set up project card click events
      projectCards.forEach(card => card.onclick = e => {
            if (document.querySelector("#modal-" + card.id.substring(card.id.indexOf("-") + 1)) != null) {
                  let modal = document.querySelector("#modal-" + card.id.substring(card.id.indexOf("-") + 1));
                  modal.style.display = "block";
                  body.style.overflow = "hidden";
                  currentModal = modal;
            }
      });

      crossboa.onclick = () => { window.location.href = "./crossboa.html"; };

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