const themeDark = {
    "--bg-headings-buttons": "hsl(231, 15%, 18%)",
    "--bg-theme-button": "hsl(0, 0%, 95%)",
    "--paragraph-text-color": "hsl(231, 15%, 18%)",
    "--bg-sedan": "hsl(31, 60%, 71%)",
    "--bg-suv": "hsl(191, 60%, 67%)",
    "--icon-suv-color": "hsl(201, 79%, 28%)",
    "--bg-luxury": "hsl(135, 60%, 55%)",
    "--icon-luxury-color": "hsl(135, 70%, 25%)",
}

const themeLight = {
    "--bg-headings-buttons": "hsl(0, 0%, 95%)",
    "--bg-theme-button": "hsl(231, 15%, 18%)",
    "--paragraph-text-color": "hsla(0, 0%, 100%, 0.75)",
    "--bg-sedan": "hsl(31, 76%, 52%)",
    "--bg-suv": "hsl(184, 100%, 22%)",
    "--icon-suv-color": "hsl(184, 67%, 45%)",
    "--bg-luxury": "hsl(179, 100%, 13%)",
    "--icon-luxury-color": "hsl(170, 76%, 41%)",
}

const root = document.documentElement;
const darkButton = document.getElementById("theme-dark-btn");
const lightButton = document.getElementById("theme-light-btn");

const applyTheme = function(theme) {
        Object.keys(theme).forEach(key => {
            root.style.setProperty(key, theme[key]);
        });
}

darkButton.addEventListener("click", event => applyTheme(themeDark));
lightButton.addEventListener("click", event => applyTheme(themeLight));