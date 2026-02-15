"use strict";

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

function createField(size) {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const totalSquare = size * size;
  const squareSize = 800 / size;

  for (let i = 0; i < totalSquare; i++) {
    const div = document.createElement("div");

    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.style.boxSizing = "border-box";
    div.style.border = "1px solid grey";

    div.style.transition = "filter 0.1s";

    div.addEventListener("mouseover", () => {
      if (!div.style.backgroundColor) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        div.dataset.brightness = "100";
      } else {
        let currentBrightness = parseInt(div.dataset.brightness);

        if (currentBrightness > 0) {
          currentBrightness -= 10;
          div.dataset.brightness = currentBrightness;

          div.style.filter = `brightness(${currentBrightness}%)`;
        }
      }
    });

    fragment.appendChild(div);
  }
  container.appendChild(fragment);
}

btn.addEventListener("click", () => {
  const userSizeField = +prompt("Enter new size: ");

  if (userSizeField > 0 && userSizeField <= 100) {
    createField(userSizeField);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

container.style.display = "flex";
container.style.width = "800px";
container.style.height = "800px";
container.style.flexWrap = "wrap";
container.style.border = "2px solid gray";

createField(16);
