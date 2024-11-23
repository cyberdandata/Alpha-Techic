// Toggle visibility of nested lists and descriptions
document.querySelectorAll(".expand-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const nextElement = button.nextElementSibling;
    if (nextElement) {
      if (nextElement.style.display === "block") {
        nextElement.style.display = "none";
      } else {
        nextElement.style.display = "block";
      }
    }
  });
});
