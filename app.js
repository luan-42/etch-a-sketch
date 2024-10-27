const grid = document.querySelector("#grid");
const size = document.querySelector("#size");
const opacity = document.querySelector("#opacity");
const color = document.querySelector("#color");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function changeSquareColor(e) {
    const square = e.target;
    square.style.backgroundColor = color.value;
    square.style.borderColor = color.value;

    square.style.opacity = square.style.opacity === "100%"
    ? opacity.value / 100 
    : +square.style.opacity + opacity.value / 100;

    if (rainbow.checked) color.value = randomColor();
}

function createGrid(size) {
    grid.innerHTML = "";
    document.querySelector("label > span").textContent = `${size} x ${size}`;
    for (let i = 0; i < size; i++) {
        let line = document.createElement("div");
        line.className = "line";
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.className = "square";
            line.appendChild(square);
        }
        grid.appendChild(line);
    }
}

grid.addEventListener("mouseover", changeSquareColor);
size.addEventListener("input", () => {
    createGrid(size.value)
});
clear.addEventListener("click", () => {createGrid(size.value)});

createGrid(size.value);