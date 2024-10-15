const DOMSelectors = {
  header: document.querySelector("h1"),
  subHeader: document.querySelector("h3"),
  button: document.querySelector("button"),
  container: document.querySelector(".container"),
  card: document.querySelector(".card"),
  text: document.querySelector(".value"),
  cardHeader: document.querySelector("cardHeader"),
};
function addElement(card) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="header">${card}</h2></div>`
  );
}
DOMSelectors.button.addEventListener("click", function (noClear) {
  noClear.preventDefault();
  addElement(DOMSelectors.text.value);
});
