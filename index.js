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
  { name: "Normal", subname: "normal", image: "BlankNormalPikmin.png" },
  { name: "Ear", subname: "ear", image: "BlankEarPikmin.png" },
  { name: "Big", subname: "big", image: "BlankBigPikmin.png" },
  { name: "Ghost", subname: "ghost", image: "BlankGhostPikmin.png" },
  { name: "Running", subname: "running", image: "BlankRunningPikmin.png" },
  { name: "Wing", subname: "wing", image: "BlankWingPikmin.png" },
  { name: "Ice", subname: "ice", image: "BlankIcePikmin.png" },
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
    let currentPikminBase = document.querySelector("#type").value;
    insertObject(
      currentPikminName,
      userType(currentPikminBase),
      currentPikminDescription
    );
  });
}

function userType(currentPikminBase) {
  pikminBodies
    .filter(
      (body) =>
        currentPikminBase === body.name || currentPikminBase === body.subname
    )
    .forEach((body) => (photoID = body.image));
  return photoID;
}

function insertObject(currentPikminName, photoID, currentPikminDescription) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card"><h2 class="card-header">${currentPikminName}</h2><img src= ${photoID} alt="Blank Pikmin Base" class="card-image"><p>${currentPikminDescription}</p></div>`
  );
}
createObject();
