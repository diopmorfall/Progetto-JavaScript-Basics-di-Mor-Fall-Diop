let page = document.querySelector(".page");
let counterContainer = document.createElement("div");
let plusButton = document.createElement("button");
let minusButton = document.createElement("button");
let output = document.createElement("span");

plusButton.textContent = "+";
minusButton.textContent = "-";
output.textContent = "0";

counterContainer.className = "counter";
counterContainer.append(plusButton, output, minusButton);

page.append(counterContainer);
