document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const logoContainer = document.getElementById("logo-container");
        const buttonContainer = document.getElementById("button-container");

        // Hide the loading animation and logo (after 3 seconds)
        logoContainer.style.display = "none";

        // Show the buttons after the loading animation disappears
        buttonContainer.style.display = "flex";
    }, 3000); // 3-second delay
});
