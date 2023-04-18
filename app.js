const screen = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

// Add click event listeners to all buttons except for the equal and clear buttons
buttons.forEach((button) => {
  if (button !== equalButton && button !== clearButton) {
    button.addEventListener("click", () => {
      screen.value += button.value;
    });
  }
});

// Add click event listener to the equal button
equalButton.addEventListener("click", () => {
  if (screen.value === "") {
    return;
  }
  screen.value = eval(screen.value);
});

// Add click event listener to the clear button
clearButton.addEventListener("click", () => {
  screen.value = "";
});
