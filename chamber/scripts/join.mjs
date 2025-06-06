document.addEventListener("DOMContentLoaded", () => {
  const joinForm = document.getElementById("join-form");

  joinForm.addEventListener("submit", async (event) => {
    const timeStamp = Date.now();
    const hiddenInput = document.getElementById("timestamp-input");
    hiddenInput.value = timeStamp;
    return true; // Allow the form to submit
  });
});
