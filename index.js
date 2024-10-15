const DOMSelectors = {
  header: document.querySelector("h1"),
  subHeader: document.querySelector("h3"),
  button: document.querySelector("button"),
  container: document.querySelector(".card-container"),
  card: document.querySelector(".card"),
  cardHeader: document.querySelector("cardHeader"),
  form: document.querySelector("form"),
};
let currentPikminName;
let currentPikminColor;
let currentPikminDescription;
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let currentPikminName = document.querySelector("#name").value;
  let currentPikminColor = document.querySelector("#color").value;
  let currentPikminDescription = document.querySelector("#description").value;
  console.log(currentPikminName);
  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card"><h2 class="card-header">${currentPikminName}</h2><img src="BlankPikmin.png" alt="Blank Pikmin Base" class="card-image"><p>${currentPikminDescription}</p></div>`
  );
});
