"use strict";

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const fragment = document.createDocumentFragment();

btn.addEventListener("click", size);

let totalContainer = 16 * 16;

function size(num) {
    num = +prompt("Enter new size");
    totalContainer = num * num;
}

for (let i = 0; i < totalContainer; i++) {
    const div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });

    fragment.appendChild(div);
}

container.appendChild(fragment);

container.style.display = "flex";
container.style.width = "800px";
container.style.flexWrap = "wrap";
