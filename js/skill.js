document.addEventListener("DOMContentLoaded", () => {
    const skillLevels = document.querySelectorAll(".skill-level");
    for (let i = 0; i < skillLevels.length; i++) {
        let skill = skillLevels[i];

        skill.style.width = "0%";

        if (skill.classList.contains("html")) {
            skill.style.width = "90%";
        } else if (skill.classList.contains("css")) {
            skill.style.width = "90%";
        } else if (skill.classList.contains("js")) {
            skill.style.width = "60%";
        } else if (skill.classList.contains("react")) {
            skill.style.width = "0%"; 
        } else if (skill.classList.contains("git")) {
            skill.style.width = "55%";
        }
    }
});