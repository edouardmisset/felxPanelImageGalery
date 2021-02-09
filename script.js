const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", displayPanel);
});

function displayPanel(event) {
  const element = event.target;
  element.classList.toggle("open");
  element.querySelector("p:first-child").classList.toggle("moveUp");
  element.querySelector("p:last-child").classList.toggle("moveDown");
}
