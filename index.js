const DOMSelectors = {
  header: document.querySelector("h1"),
  subHeader: document.querySelector("h3"),
  button: document.querySelector(".submit-button"),
  container: document.querySelector(".card-container"),
  card: document.querySelector(".card"),
  cardHeader: document.querySelector(".cardHeader"), // Fixed selector
  form: document.querySelector("form"),
  typeOptions: document.querySelector(".dropdown-content"),
  colorInput: document.querySelector("#color"),
  title: document.getElementById("name"),
  color: document.getElementById("color"),
  description: document.getElementById("description"),
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
let currentPikminType;
function createObject() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    let currentPikminName = document.querySelector("#name").value;
    let currentBackgroundColor = DOMSelectors.colorInput.value;
    let currentPikminDescription = document.querySelector("#description").value;
    insertObject(
      currentBackgroundColor,
      currentPikminName,
      currentPikminType,
      currentPikminDescription
    );
    clearPrompt();
  });
}
function typeSelect() {
  DOMSelectors.typeOptions.addEventListener("click", function (event) {
    let pikminType = event.target.className;
    pikminBodies.forEach((type) => {
      if (type.name === pikminType) {
        currentPikminType = type.image;
      }
    });
  });
}
function clearPrompt() {
  DOMSelectors.title.value = "";
  DOMSelectors.color.value = "";
  DOMSelectors.description.value = "";
}

let idNumber = 0;
function insertObject(
  currentBackgroundColor,
  currentPikminName,
  currentPikminType,
  currentPikminDescription
) {
  idNumber += 1;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card" style="background-color: ${currentBackgroundColor};" id="card-id-${idNumber}"><h2 class="card-header">${currentPikminName}</h2><img src=${currentPikminType} class="card-image"><p>${currentPikminDescription}</p><button class="delete-card" id="remove-button-${idNumber}">Remove</button></div>`
  );
}
typeSelect();
createObject();
