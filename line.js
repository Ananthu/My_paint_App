  var canvas,
      context,
      dragging = false,
      dragStartLocation,
      snapshot;
function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;

    return {x: x, y: y};
}

function takeSnapshot() {
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnapshot() {
    context.putImageData(snapshot, 0, 0);
}


function drawLine(position) {
    context.beginPath();
    context.moveTo(dragStartLocation.x, dragStartLocation.y);
    context.lineTo(position.x, position.y);
    context.stroke();
}

function dragStart(event) {
    dragging = true;
    dragStartLocation = getCanvasCoordinates(event);
    takeSnapshot();
}

function drag(event) {
    var position;
    if (dragging === true) {
        restoreSnapshot();
        position = getCanvasCoordinates(event);
        drawLine(position);
    }
}

function dragStop(event) {
    dragging = false;
    restoreSnapshot();
    var position = getCanvasCoordinates(event);
    drawLine(position);
}

function init() {
    removeListeners();
    context.strokeStyle = 'black';
    context.lineWidth = 6;
    context.lineCap = 'round';

    canvas.addEventListener('mousedown', dragStart);
    canvas.addEventListener('mousemove', drag);
    canvas.addEventListener('mouseup', dragStop);
}

function removeLineListeners(){
    canvas.removeEventListener('mousedown', dragStart);
    canvas.removeEventListener('mousemove', drag);
    canvas.removeEventListener('mouseup', dragStop);
}


function line(){
  init();
}




