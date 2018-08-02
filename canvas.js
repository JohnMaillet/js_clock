
//functions and methods for the canvas element
function CanvasID () {
  return arguments.length == 0 ? 'canvas': arguments[0];
}

const canvas = document.createElement('canvas');
const context = canvas.getContext("2d");
canvas.height = HEIGHT;
canvas.width = WIDTH;
canvas.style.left = LEFT_POSITION;
canvas.style.top = TOP_POSITION;
canvas.style.position = POS_TYPE;
canvas.id = CanvasID(CANVASID);
document.body.appendChild(canvas);
