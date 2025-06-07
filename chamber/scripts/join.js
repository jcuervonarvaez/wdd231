document.addEventListener("DOMContentLoaded", () => {
  const joinForm = document.getElementById("join-form");

  joinForm.addEventListener("submit", async (event) => {
    const timeStamp = Date.now();
    const hiddenInput = document.getElementById("timestamp-input");
    hiddenInput.value = timeStamp;
    return true; // Allow the form to submit
  });

  //Modals
  const btnsModal = document.querySelectorAll(".btn-modal");
  btnsModal.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const modalId = event.target.getAttribute("data-modal-id");
      const modal = document.getElementById(modalId);
      modal.classList.add("open");
      modal.showModal();
    });
  });

    // Close modals when clicking outside of them by .close-modal btna
    const closeBtns = document.querySelectorAll(".close-modal");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const modal = event.target.closest("dialog");
        if (modal) {
          modal.classList.remove("open");
          modal.close();
        }
      });
    });

});
