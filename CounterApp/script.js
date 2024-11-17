const value = document.querySelector("#counter-value");
const increment = document.querySelector("#increment-btn");
const decrement = document.querySelector("#decrement-btn");
const reset = document.querySelector("#reset-btn");
const priceValue = document.querySelector(".priceValue");
let counter = 0;
let price = 230;

const num = () => {
  value.textContent = counter;
};

increment.addEventListener("click", function () {
  counter++;
  num();
  priceValue.innerHTML = price * counter;
});

decrement.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    num();
    priceValue.innerHTML = price * counter;
  }
});

reset.addEventListener("click", function () {
  counter = 0;
  num();
  priceValue.innerHTML = price;
});
