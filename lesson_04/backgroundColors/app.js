document.querySelector("#turnRed").addEventListener("click", turnRedFunction);
document.querySelector("#turnBlue").addEventListener("click", turnBlueFunction);
document.querySelector("#turnPurple").addEventListener("click", turnPurpleFunction);
document.querySelector("#turnYellow").addEventListener("click", turnYellowFunction);
document.querySelector("#turnGreen").addEventListener("click", turnGreenFunction);


function turnRedFunction() {
  document.querySelector("body").style.backgroundColor = "red";
}

function turnBlueFunction() {
  document.querySelector("body").style.backgroundColor = "blue";
}

function turnPurpleFunction() {
  document.querySelector("body").style.backgroundColor = "purple";
}

function turnYellowFunction() {
  document.querySelector("body").style.backgroundColor = "yellow";
}

function turnGreenFunction() {
  document.querySelector("body").style.backgroundColor = "green";
}
