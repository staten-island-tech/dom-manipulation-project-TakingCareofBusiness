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
  { name: "Blue", subname: "blue", image: "BluePikmin.png" },
  { name: "Yellow", subname: "yellow", image: "YellowPikmin.png" },
  { name: "Purple", subname: "purple", image: "PurplePikmin.png" },
  { name: "Glow", subname: "glow", image: "GlowPikmin.png" },
  { name: "Red", subname: "red", image: "RedPikmin.png" },
  { name: "Winged", subname: "winged", image: "WingedPikmin.png" },
  { name: "Ice", subname: "ice", image: "IcePikmin.png" },
  { name: "Rock", subname: "rock", image: "RockPikmin.png" },
  { name: "White", subname: "white", image: "WhitePikmin.png" },
];
let currentPikminName;
let currentPikminColor;
let currentPikminDescription;
let currentPikminBase;
let photoID;

function createObject() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    let currentPikminName = document.querySelector("#name").value;
    let currentPikminColor = document.querySelector("#color").value;
    let currentPikminDescription = document.querySelector("#description").value;
    insertObject(currentPikminName, currentPikminDescription);
  });
}
function pikminType() {
  DOMSelectors.
}
function insertObject(currentPikminName, currentPikminDescription) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card"><h2 class="card-header">${currentPikminName}</h2><p>${currentPikminDescription}</p></div>`
  );
}
createObject();
