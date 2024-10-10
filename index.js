const DOMSelectors = {
  header: document.querySelector("h1"),
  subHeader: document.querySelector("h3"),
  button: document.querySelector("button"),
  container: document.querySelector(".container"),
  card: document.querySelector(".card"),
  text: document.getElementById("value"),
  cardHeader: document.qyerySelector("cardHeader"),
};
function addElement(card) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    '<div class="card"><h2 class="header</div>'
  );
}
