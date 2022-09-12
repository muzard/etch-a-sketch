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
let colorpickerValue;

/* fetch desired color */
colorpicker.oninput = function() {
  colorpickerValue = this.value()
  console.log(colorpickerValue)
}

let actualGrid = document.getElementById("actualGrid")

/* adds and removes boxes to the actualGrid container */
function populateBoard(size) {
  let squares = actualGrid.querySelectorAll("div")
  squares.forEach(div => div.remove)

  actualGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  actualGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i<size**2; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "red"
    actualGrid.insertAdjacentElement("beforeend", square)
  }
}

populateBoard(16);

function changeSize(newSize) {
  populateBoard(newSize)
}