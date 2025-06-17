document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        const timeStamp = Date.now();
        const hiddenInput = document.getElementById("timestamp-input");
        hiddenInput.value = timeStamp;
    });
});
