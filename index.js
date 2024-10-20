const DOMSelectors = {
  container: document.querySelector(".card-container"),
  card: document.querySelector(".card"),
  cardHeader: document.querySelector(".cardHeader"),
  form: document.querySelector("form"),
  typeOptions: document.querySelector(".dropdown-content"),
  colorInput: document.getElementById("color"),
  title: document.getElementById("name"),
  description: document.getElementById("description"),
};

const pikminBodies = [
  { name: "Blue", image: "BluePikmin.png" },
  { name: "Yellow", image: "YellowPikmin.png" },
  { name: "Purple", image: "PurplePikmin.png" },
  { name: "Glow", image: "GlowPikmin.png" },
  { name: "Red", image: "RedPikmin.png" },
  { name: "Winged", image: "WingedPikmin.png" },
  { name: "Ice", image: "IcePikmin.png" },
  { name: "Rock", image: "RockPikmin.png" },
  { name: "White", image: "WhitePikmin.png" },
];
let currentPikminType;
function cardLifeCycle() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    let currentPikminName = DOMSelectors.title.value;
    let currentBackgroundColor = DOMSelectors.colorInput.value;
    let currentPikminDescription = DOMSelectors.description.value;
    insertObject(
      currentBackgroundColor,
      currentPikminName,
      currentPikminType,
      currentPikminDescription
    );
    clearPrompt();
    removeCard(idNumber);
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
  DOMSelectors.form.reset();
}
function removeCard(idNumber) {
  let deleteButton = document.querySelector(`#remove-button-${idNumber}`);
  deleteButton.addEventListener("click", function () {
    let card = document.querySelector(`#card-${idNumber}`);
    card.remove();
  });
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
    `<div class="card" style="background-color: ${currentBackgroundColor};" id="card-${idNumber}"><h2 class="card-header">${currentPikminName}</h2><img src=${currentPikminType} class="card-image"><p class="card-description">${currentPikminDescription}</p><button class="delete-card" id="remove-button-${idNumber}"><img src="Bulborb.png" class="remove-button-image"></button></div>`
  );
}
typeSelect();
cardLifeCycle();
