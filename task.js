let currentIndex = 0;
let appliedColors = [];

function task(ind) {
    const boxes = document.querySelectorAll('.box');
    let color = '';

    if (ind === 1) {
        color = 'red';
    } else if (ind === 2) {
        color = 'green';
    } else if (ind === 3) {
        color = 'blue';
    }
    if(appliedColors[0]===color&&appliedColors[2]){
        boxes[3].style.backgroundColor = appliedColors[0];
    }
    if(appliedColors.length===3&&appliedColors[2]!==color&&appliedColors[1]!==color){
        boxes[3].style.backgroundColor = color;
    }
    if ((currentIndex === 0 && appliedColors[3] === color) ||
        (currentIndex === 1 && appliedColors[2] === color) ||
        (currentIndex === 0 && appliedColors[1] === color) ||
        (currentIndex === 0 && appliedColors[2] === color) ||
        (currentIndex === 1 && appliedColors[0] === color) ||
        (currentIndex === 2 && appliedColors[0] === color) ||
        (currentIndex === 1 && appliedColors[3] === color) ||
        (currentIndex === 2 && appliedColors[3] === color) ||
        (currentIndex === 3 && appliedColors[1] === color) ||
        (currentIndex === 3 && appliedColors[2] === color)) {
        alert('Color already applied to matching box. Choose a different color.');
        return;
    }

    boxes[currentIndex].style.backgroundColor = color;
    appliedColors[currentIndex] = color;
    currentIndex++;
    // console.log("currentIndex", currentIndex);
    // console.log("appliedColors", appliedColors);
}
