// Select the toggle button
const toggleButton = document.getElementById("theme-toggle");

// Add event listener to toggle dark mode
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
