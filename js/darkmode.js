document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.getElementById("darkmode-toggle");
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeBtn.textContent = "Click for Light Mode";
    } else {
        document.body.classList.remove("dark-mode"); 
        darkModeBtn.textContent = "Click for Dark Mode";
    }

    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "Click for Light Mode";
            localStorage.setItem("darkMode", "enabled");
        } else {
            darkModeBtn.textContent = "Click for Dark Mode";
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
