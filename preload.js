const savedTheme = localStorage.getItem("theme");

// Apply saved preference if it exists
if (savedTheme) {
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (savedTheme === "light") {
    document.documentElement.classList.add("light");
  }
}
// If no saved preference, don't add any class - let system preference take over via CSS media query
