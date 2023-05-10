const selectedColor = document.querySelector("#color");
const grid = document.querySelector("#container");
const redBtn = document.querySelector("#red");
const blueBtn = document.querySelector("#blue");
const greenBtn = document.querySelector("#green");
const rainbowBtn = document.querySelector("#rainbow");
const resetBtn = document.querySelector("#resetBtn");
const x16btn = document.querySelector("#s16");
const x32btn = document.querySelector("#s32");
const x64btn = document.querySelector("#s64");
let defaultColor = "Red";
updateColorDisplay();

createGrid(16);

redBtn.addEventListener("click", () => {
   defaultColor = "Red";
   updateColorDisplay(); });

blueBtn.addEventListener("click", () => {
  defaultColor = "Blue"; 
  updateColorDisplay(); });

greenBtn.addEventListener("click", () => { 
  defaultColor = "Green";
  updateColorDisplay(); });

rainbowBtn.addEventListener("click", () => { 
  defaultColor = "Rainbow";
  updateColorDisplay(); });

resetBtn.addEventListener("click", () => {
  resetSquares();
  updateColorDisplay(); });

x16btn.addEventListener("click", () => {
  clearGrid();
  createGrid(16); });

x32btn.addEventListener("click", () => {
  clearGrid();
  createGrid(32); });

x64btn.addEventListener("click", () => {
  clearGrid();
  createGrid(64); });

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    grid.appendChild(row);
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.toggle("square");
      let adjusted = 480 / size;
      div.style.width = adjusted + "px";
      div.style.height = adjusted + "px";
      row.appendChild(div); 
    }
  }
  addColorOnHover();
}

function addColorOnHover() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => 
    square.addEventListener("mouseover", () => {
      switch(defaultColor) {
        case "Red" :
        case "Blue" :
        case "Green" : 
          square.style.background = defaultColor;
          break;
        case "Rainbow" :
          square.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
          break;
      } 
    }));
}

function resetSquares() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => 
    square.style.background = "beige");
  
  defaultColor = "Red";
}

function updateColorDisplay() {
  selectedColor.textContent = "Current Color: " + defaultColor;
}


function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}