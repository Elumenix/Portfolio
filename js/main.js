"use strict";

let body;
let crossboa;
let modals;
let projectCards;
let email;
let linkedIn;
let currentModal;
let videos;
let confront;
let green;
let modalTitle
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
let interval = null;
let iteration;

window.addEventListener('load', function () {
      body = document.querySelector("body");
      crossboa = document.querySelector("#card-crossboa");
      modals = document.querySelectorAll(".modal");
      projectCards = document.querySelectorAll(".project-card");
      email = document.querySelector("#email");
      linkedIn = document.querySelector("#linked");

      // Prevent constant use of queryselector
      videos = this.document.querySelectorAll("video");
      let confront = this.document.querySelector("#modal-confrontation");
      let green = this.document.querySelector("#modal-evergreen-escapades");



      // Contact information
      email.onclick = () => { window.location.href = "mailto:dps5393@rit.edu"; };
      linkedIn.onclick = () => { window.open("https://www.linkedin.com/in/donovanscullion/", '_blank'); };

      this.document.querySelector("#artista-link").onclick = () => { window.open("https://drive.google.com/file/d/1Vy7Vk7Z--97u6p9W1e8co9mVak-XnMDB/view?usp=sharing", '_blank'); };
      this.document.querySelector("#mood-board-link").onclick = () => { window.open("https://people.rit.edu/dps5393/235/project1/index.html", '_blank'); };
      this.document.querySelector("#ascii-link").onclick = () => { window.open("https://people.rit.edu/dps5393/235/Project2/project2.html", '_blank'); };
      this.document.querySelector("#audio-link").onclick = () => { window.open("https://people.rit.edu/dps5393/audio/index.html", '_blank'); };
      this.document.querySelector("#roundabout-link").onclick = () => { window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=2930119947", '_blank'); };
      this.document.querySelector("#deletion-link").onclick = () => { window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=2945646840", '_blank'); };
      this.document.querySelector("#pupify-link").onclick = () => { window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=3005429221", '_blank'); };


      // set up project card click events
      projectCards.forEach(card => card.onclick = e => {
            if (document.querySelector("#modal-" + card.id.substring(card.id.indexOf("-") + 1)) != null) {
                  let modal = document.querySelector("#modal-" + card.id.substring(card.id.indexOf("-") + 1));
                  modal.style.display = "block";
                  body.style.overflow = "hidden";
                  currentModal = modal;

                  modalTitle = currentModal.querySelector(".title");
                  iteration = 0;

                  this.clearInterval(interval)

                  interval = setInterval(() => {
                        modalTitle.innerText = modalTitle.innerText.split("").map((character, index) => {
                              if (index < iteration) {
                                    return modalTitle.dataset.value[index];
                              }

                              return characters[Math.floor(Math.random() * 62)]
                        }).join("");

                        if (iteration >= modalTitle.dataset.value.length) {
                              this.clearInterval(interval);
                        }

                        iteration += 1 / 3;
                  }, 30);


                  if (currentModal == confront) {
                        videos[2].play();
                  }

                  if (currentModal == green) {
                        videos[0].play();
                        videos[1].play();
                  }
            }
      });

      crossboa.onclick = () => { window.location.href = "./crossboa.html"; };

      // set up a way to close the modals
      for (let modal of modals) {
            modal.querySelector(".modal-close").onclick = () => closeModal(modal);
      }

      // Closes modal if window is clicked on
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

            // will pause and reset any videos that were playing
            for (let v of videos) {
                  if (v.paused == false) {
                        v.pause();
                        v.currentTime = 0;
                  }
            }
      };
});
