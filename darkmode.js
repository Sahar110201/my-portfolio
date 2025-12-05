// ---- DARK MODE TOGGLE (click-only but persistent) ---- //
document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.getElementById("darkmode-toggle");

darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "Click for Light Mode";
        } else {
            darkModeBtn.textContent = "Click for Dark Mode";
        }
    });
});
