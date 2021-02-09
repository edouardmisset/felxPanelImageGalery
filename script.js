const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", displayPanel);
});

function displayPanel() {
  this.classList.toggle("open");
  this.querySelector("p:first-child").classList.toggle("first");
  this.querySelector("p:last-child").classList.toggle("last");
}
