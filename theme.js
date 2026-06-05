const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;
const storageKey = "portfolio-theme";

function isDarkTheme() {
  return root.dataset.theme === "dark";
}

function updateToggle() {
  const dark = isDarkTheme();
  const label = dark ? "Switch to light mode" : "Switch to dark mode";

  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
}

function setTheme(theme) {
  if (theme === "dark") {
    root.dataset.theme = "dark";
  } else {
    delete root.dataset.theme;
  }

  try {
    localStorage.setItem(storageKey, theme);
  } catch {}

  updateToggle();
}

themeToggle.addEventListener("click", () => {
  setTheme(isDarkTheme() ? "light" : "dark");
});

updateToggle();
