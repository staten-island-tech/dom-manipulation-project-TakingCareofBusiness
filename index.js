const DOMSelectors = {
  header: document.querySelector("h1"),
  subHeader: document.querySelector("h3"),
  button: document.querySelector(".submit-button"),
  container: document.querySelector(".card-container"),
  card: document.querySelector(".card"),
  cardHeader: document.querySelector("cardHeader"),
  form: document.querySelector("form"),
  typeOptions: document.querySelector(".dropdown-content"),
  colorInput: document.querySelector("#color"),
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

function createObject() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    let currentPikminName = document.querySelector("#name").value;
    let currentBackgroundColor = DOMSelectors.colorInput.value;
    let currentPikminDescription = document.querySelector("#description").value;
    insertObject(
      currentBackgroundColor,
      currentPikminName,
      currentPikminDescription
    );
  });
}
function typeSelect() {
  DOMSelectors.typeOptions.addEventListener("click", function (event) {
    let pikminType = event.target.className;
    let selectedType;
    pikminBodies
      .filter((type) => type.name === pikminType)
      .forEach((type) => (selectedType = type.image));
    return selectedType;
  });
}
function insertObject(
  currentBackgroundColor,
  currentPikminName,
  currentPikminDescription
) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card" style="background-color: ${currentBackgroundColor};"><h2 class="card-header">${currentPikminName}</h2>im<p>${currentPikminDescription}</p></div>`
  );
}
typeSelect();
createObject();
