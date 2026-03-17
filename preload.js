const savedThemePreload = localStorage.getItem("theme");

// Apply saved preference if it exists
if (savedThemePreload === "dark") {
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("light");
} else if (savedThemePreload === "light") {
  document.documentElement.classList.add("light");
  document.documentElement.classList.remove("dark");
}
// If no saved preference, don't add any class - let system preference take over via CSS media query
