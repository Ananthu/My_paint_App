

var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
var radius=10;
var dragging1=false;
context.lineWidth=2*radius;

var brushButton=document.getElementById('brush');
brushButton.addEventListener('click',free);

var lineButton=document.getElementById('line');
lineButton.addEventListener('click',line);

var pencilButton=document.getElementById('pencil');
pencilButton.addEventListener('click',pencilFun);

var eraserButton=document.getElementById('eraser');
eraserButton.addEventListener('click',eraserFun);

function pencilFun(e){
  var radius=1;
  context.lineWidth=2*radius;
  free();
  setRadius(1);
  setColor('black');
}

var putPoint=function(e) {
  removeLineListeners(); 
  if(dragging1){
    context.lineTo(e.clientX,e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX,e.clientY);
  }//end of if
}

var engage = function(e) {
    dragging1=true;
    putPoint(e);
}

var disengage = function() { 
    dragging1=false;
    context.beginPath();
}
function free(){

  removeLineListeners();  
  var radius=10;
  var dragging1=false;
  context.lineWidth=2*radius;
  setRadius(radius);
  setColor('black');
  canvas.addEventListener('mousedown',engage,false);
  canvas.addEventListener('mousemove',putPoint,false);
  canvas.addEventListener('mouseup',disengage,false);
}

function removeListeners(){
  canvas.removeEventListener('mousedown',engage,false);
  canvas.removeEventListener('mousemove',putPoint,false);
  canvas.removeEventListener('mouseup',disengage,false);
}


var refreshButton=document.getElementById('clear');
refreshButton.addEventListener('click',refresh);
function refresh(){
        context.clearRect(0, 0, canvas.width, canvas.height);
}


function eraserFun(){
	alert('eraser is on');
        free();
        setColor('white');
}




