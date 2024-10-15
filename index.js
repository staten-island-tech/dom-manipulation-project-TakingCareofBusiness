const DOMSelectors = {
  header: document.querySelector("h1"),
  subHeader: document.querySelector("h3"),
  button: document.querySelector("button"),
  container: document.querySelector(".card-container"),
  card: document.querySelector(".card"),
  cardHeader: document.querySelector("cardHeader"),
  form: document.querySelector("form"),
};
const pikminBodies = [
  { name: "Red", subname: "red", image: "BlankRedPikmin.png" },
  { name: "Yellow", subname: "yellow", image: "BlankYellowPikmin.png" },
];
let currentPikminName;
let currentPikminColor;
let currentPikminDescription;
let currentPikminBase;
let photoID;
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let currentPikminName = document.querySelector("#name").value;
  let currentPikminColor = document.querySelector("#color").value;
  let currentPikminDescription = document.querySelector("#description").value;
  let currentPikminBase = document.querySelector("#type").value;
  pikminBodies
    .filter(
      (body) =>
        currentPikminBase === body.name || currentPikminBase === body.subname
    )
    .forEach((body) => (photoID = body.image));

  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card"><h2 class="card-header">${currentPikminName}</h2><img src=photoID alt="Blank Pikmin Base" class="card-image"><p>${currentPikminDescription}</p></div>`
  );
});
