let slider = document.getElementById("myRange");
let output = document.getElementById("demo"); // Display the default slider value

let sliderValueText = document.querySelector("#sliderValue")
let sliderValue;
// Update the current slider value (each time you drag the slider handle)

// fetch size value and use function to add them to the cont
slider.oninput = function() {
  sliderValueText.textContent = `Grid size: ${this.value}x${this.value}`;
  sliderValue = this.value;
  sliderAction()
}

let colorpicker = document.getElementById("colorpicker");
let colorpickerValue;

/* fetch desired color */
colorpicker.oninput = function() {
  colorpickerValue = this.value()
}

let actualGrid = document.getElementById("actualGrid")

/* adds and removes boxes to the actualGrid container */
function sliderAction() {
  while (actualGrid.firstChild) {
    actualGrid.removeChild(actualGrid.firstChild)
  }

  for (let i = sliderValue; i > 0; i--) {
    let box = document.createElement('div')
    box.setAttribute('class', 'coloredBox')
    actualGrid.appendChild(box)
  }
  alert("works")
}