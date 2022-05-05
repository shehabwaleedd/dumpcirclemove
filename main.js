let circle = document.querySelector(".circle")
let moveBy = 40;


window.addEventListener("load", ()=> {
    circle.style.position = "absolute";
    circle.style.backgroundColor = "blue"
    circle.style.left = 0;
    circle.style.top = 0;
})

window.addEventListener("keyup", (e) => {
    switch(e.key) {
        case "ArrowLeft":
            circle.style.left = parseInt(circle.style.left) - moveBy + "px";
            circle.style.backgroundColor = "#379e99";
            break;
        case "ArrowRight":
            circle.style.left = parseInt(circle.style.left) + moveBy + "px";
            circle.style.backgroundColor = "#a081d1";
            break;
        case "ArrowUp":
            circle.style.top = parseInt(circle.style.top) - moveBy + "px";
            circle.style.backgroundColor = "#82a3d3";
            break;
        case "ArrowDown":
            circle.style.top = parseInt(circle.style.top) + moveBy + "px";
            circle.style.backgroundColor = "#d181a6";
            break;
    }
})

window.addEventListener("keyup", (e)=> {
    if(circle.style.left < "100px") {
        circle.style.color = "red";
    }
})