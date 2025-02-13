function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input[type=number]");
const divBoxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", (event) => {
  let quantity = input.value;
  divBoxes.innerHTML = "";

  if (quantity >= 1 && quantity <= 100) {
    createBoxes(quantity);
    input.value = "";
  }
});

btnDestroy.addEventListener("click", (event) => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxesArray = [];

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const width = 30;
    const height = 30;
    const markup = `<div style="width: ${width + i * 10}px; height: ${
      height + i * 10
    }px; background-color: ${color}"></div>`;

    boxesArray.push(markup);
  }

  divBoxes.innerHTML = boxesArray.join("");
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

divBoxes.style.display = "flex";
divBoxes.style.gap = "44px";
divBoxes.style.flexWrap = "wrap";
divBoxes.style.marginTop = "24px";
