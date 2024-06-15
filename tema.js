document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");
    const themeStylesheet = document.getElementById("theme-stylesheet");
    const darkThemeStylesheet = document.querySelector("link[href='styles_dark.css']");

    themeToggleButton.addEventListener("click", function () {
        if (themeStylesheet.getAttribute("href") === "styles_light.css") {
            themeStylesheet.setAttribute("href", "styles_dark.css");
            themeToggleButton.textContent = "Modo Claro";
        } else {
            themeStylesheet.setAttribute("href", "styles_light.css");
            themeToggleButton.textContent = "Modo Oscuro";
        }
    });
});