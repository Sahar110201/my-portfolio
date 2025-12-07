document.addEventListener("DOMContentLoaded", () => {
    const skillLevels = document.querySelectorAll(".skill-level");

    skillLevels.forEach(skill => {
        let width;
        if (skill.classList.contains("html")) width = "90%";
        else if (skill.classList.contains("css")) width = "85%";
        else if (skill.classList.contains("js")) width = "80%";
        else if (skill.classList.contains("react")) width = "70%";
        else if (skill.classList.contains("git")) width = "75%";

        setTimeout(() => {
            skill.style.width = width;
        }, 300);
    });
});