// ---- DARK MODE TOGGLE (click-only but persistent) ---- //
document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.getElementById("darkmode-toggle");

darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
