document.addEventListener("DOMContentLoaded", () => {
    const skillLevels = document.querySelectorAll(".skill-level");
    for (let i = 0; i < skillLevels.length; i++) {
        let skill = skillLevels[i];
        let width = "0%"; 

        if (skill.classList.contains("html")) {
            width = "100%";
        } else if (skill.classList.contains("css")) {
            width = "90%";
        } else if (skill.classList.contains("js")) {
            width = "60%";
        } else if (skill.classList.contains("react")) {
            width = "0%";
        } else if (skill.classList.contains("git")) {
            width = "55%";
        }
            skill.style.width = width;
    }
});