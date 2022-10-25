const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
viewportHeight = window.innerHeight;
viewportWidth = window.innerWidth;
sidebar.style.height = `${viewportHeight}px`;
sidebar.style.width = `${0.30 * viewportWidth}px`;


let boxes;
let penColor = "black";

// pen color
const colorIndicator = document.getElementById("colorIndicator");
const colorInput = document.getElementById("colorInput");
colorIndicator.style.backgroundColor = penColor;
colorInput.oninput = function() {
    penColor = this.value
    if(penColor == ""){
        penColor = "black";
    }
    colorIndicator.style.backgroundColor = penColor;
}


//eraser
const eraserBtn = document.getElementById("eraserBtn");
eraserBtn.onclick = function() {
    penColor = "white";
    colorIndicator.style.backgroundColor = penColor;
};



// clear 
const clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = () => boxes.forEach(box => box.style.backgroundColor = "white");


// slider 
const slider = document.getElementById("myRange");
const sliderOutput = document.getElementById("sliderOutput");
sliderOutput.innerHTML = slider.value;
slider.oninput = function() {
    sliderOutput.innerHTML = this.value;
    container.innerHTML = "";
    createGrid(this.value);
  }





createGrid(slider.value);






function createGrid(dimension){
    let boxSize = 480 / dimension;
    for(i=0; i<(dimension * dimension); i++){
        const box = document.createElement("div");
        box.style.height = `${boxSize}px`;
        box.style.width = `${boxSize}px`;
        box.classList.add("box");
        container.appendChild(box);
    }
    boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mousedown",selectBox));
    boxes.forEach(box => box.addEventListener("mouseover", selectBoxPressed));
}

function selectBox(e){
    e.target.style.backgroundColor = penColor;
    
}

function selectBoxPressed(e){
    if (e.buttons > 0){
        e.target.style.backgroundColor = penColor;
    }
}








