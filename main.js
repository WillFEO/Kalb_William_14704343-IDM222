const themeToggle = document.getElementById("theme-toggle");

// Sync checkbox with current dark mode state on page load
if (document.documentElement.classList.contains("dark")) {
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
