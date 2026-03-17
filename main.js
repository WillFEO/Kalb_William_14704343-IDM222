const themeToggle = document.getElementById("theme-toggle");

// Restore theme preference from localStorage, or use system preference
// savedTheme is already declared from preload.js
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("light");
  themeToggle.checked = true;
} else if (savedTheme === "light") {
  document.documentElement.classList.add("light");
  document.documentElement.classList.remove("dark");
  themeToggle.checked = false;
} else {
  // No saved preference, let system preference take over (don't add any class)
  themeToggle.checked = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});
