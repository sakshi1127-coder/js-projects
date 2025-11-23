
const redBtn = document.querySelector(".red");
const blueBtn = document.querySelector(".blue");
const greenBtn = document.querySelector(".green");
const resetBtn = document.querySelector(".reset");


const body = document.querySelector("body");

redBtn.addEventListener("click", function () {
  body.style.backgroundColor = "red";
})


blueBtn.addEventListener("click", function () {
  body.style.backgroundColor = "blue";
})

greenBtn.addEventListener("click", function () {
  body.style.backgroundColor = "green";
})


resetBtn.addEventListener("click", function () {
  body.style.backgroundColor = "white";
})

