const container = document.querySelector(".container");
const square = document.querySelector(".square");

let gridWidth = 16; // by default width of grid is 16 x 16
let gridPerimeter = gridWidth ** 2

const squareSize = 20;

function getRandomColor() {
    return Math.floor(Math.random() * 255);
};

console.log(getRandomColor());

function createGrid(gridPerimeter) {
    for (let i = 0; i < gridPerimeter; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square")
        square.style.opacity = 1;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        let opacity = 0.1;
        
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${opacity})`;
            opacity += 0.1;
        })

        container.appendChild(square);
    }
}

const button = document.querySelector("#popup");

button.addEventListener("click", () => {
    let answer = prompt("Squares per side(1-100): ", "16");

    if (answer <= 0 || answer > 100) {
        alert("Type a number that in range from 1 to 100")
        answer = 0;
        gridPerimeter = answer ** 2;
    }   else {
        gridPerimeter = answer ** 2;
    }

    container.style = `width:${answer * squareSize}px`
    container.innerHTML = '';
    createGrid(gridPerimeter);
})