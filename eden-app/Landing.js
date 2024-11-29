document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const logoContainer = document.getElementById("logo-container");
        const buttonContainer = document.getElementById("button-container");

        // Smoothly transition the logo container out
        logoContainer.style.opacity = "0";
        logoContainer.style.transition = "opacity 0.5s ease";

        // Show buttons after the transition
        setTimeout(() => {
            logoContainer.style.display = "none"; // Hide completely after fading
            buttonContainer.style.display = "block"; // Show buttons
            buttonContainer.style.opacity = "1"; // Fade in
        }, 500); // Matches the fade-out time
    }, 3000); // 3-second loading delay
});
