let slider = document.getElementById("myRange");
let output = document.getElementById("demo"); // Display the default slider value

let sliderValueText = document.querySelector("#sliderValue")
let sliderValue;
// Update the current slider value (each time you drag the slider handle)

// fetch size value and use function to add them to the cont
slider.oninput = function() {
  sliderValueText.textContent = `Grid size: ${this.value}x${this.value}`;
  sliderValue = this.value;
  populateBoard(sliderValue)
}

let colorpicker = document.getElementById("colorpicker");
let colorpickerValue = "#000000";

/* fetch desired color */
function colorpickerChange(value) {
  colorpickerValue = value
  removeHighlights()
}

let actualGrid = document.getElementById("actualGrid")

/* adds and removes boxes to the actualGrid container */
function populateBoard(size) {
  let squares = actualGrid.querySelectorAll("div")
  squares.forEach(div => div.remove())

  actualGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  actualGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i<size**2; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', colorChange);
    square.addEventListener('click', clickColor)
    square.style.backgroundColor = "white";
    actualGrid.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(newSize) {
  populateBoard(newSize)
}

function colorChange() {
  if (mouseDown) {
    if (colorpickerValue == "random") {
      this.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    } else {
      this.style.backgroundColor = colorpickerValue;
    }
  }
}

let randomColorButton = document.getElementById("random")

function randomColor() {
  colorpickerValue = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

function resetGrid() {
  let squares = actualGrid.querySelectorAll("div")
  squares.forEach(div => div.style.backgroundColor = "white")
}

function randomPen() {
  colorpickerValue = "random";
}

let mouseDown = false;

let bodyListener = document.querySelector("body")

bodyListener.addEventListener("mousedown", (e) => {
  mouseDown = true
})
bodyListener.addEventListener("mouseup", (e) => {
  mouseDown = false
})

function eraser() {
  colorpickerValue = "#FFFFFF"
}

function clickColor() {
  if (colorpickerValue == "random") {
    this.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
  } else {
    this.style.backgroundColor = colorpickerValue;
  }
}

buttons = document.querySelectorAll('button') // lis???? eventListener colorpickeriin

buttons.forEach(button => button.addEventListener("click", (e) => {
  changeCircleColor()
  removeHighlights()
  button.classList.add('transform')

}))

function removeHighlights() {
  buttons.forEach(button => button.classList.remove('transform'))
}

function changeCircleColor() {
  if (colorpickerValue == "random") {
    document.getElementById("colorpicker").value = "#FF00FF"
  } else {
    document.getElementById("colorpicker").value = colorpickerValue
  }
}

let resetButton = document.getElementById("reset")
resetButton.addEventListener("transitionend", () => resetButton.classList.remove("transform"))

randomColorButton.addEventListener("transitionend", () => randomColorButton.classList.remove("transform"))