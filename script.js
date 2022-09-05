let slider = document.getElementById("myRange");
let output = document.getElementById("demo"); // Display the default slider value

let sliderValueText = document.querySelector("#sliderValue")
let sliderValue;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  sliderValueText.textContent = `Grid size: ${this.value}x${this.value}`;
  sliderValue = this.value;
}

let colorpicker = document.getElementById("colorpicker");
let colorpickerValue;

slider.oninput = function() {
  colorpickerValue = this.value()
}