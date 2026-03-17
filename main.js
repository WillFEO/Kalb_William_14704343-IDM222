const themeToggle = document.getElementById("theme-toggle");

// Set toggle to correct state based on dark or light mode
themeToggle.checked = document.documentElement.classList.contains("dark");

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
