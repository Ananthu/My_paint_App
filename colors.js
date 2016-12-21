var colors=['black','white','grey','red','orange','yellow','green','blue','indigo','violet'];



for(var i=0,n=colors.length;i<n;i++){
	var swatch=document.createElement('div');
	swatch.className='swatch';
	swatch.style.backgroundColor=colors[i];
	swatch.addEventListener('click',setSwatch);
	document.getElementById('colors').appendChild(swatch);
}


function setColor(color){
	context.fillStyle=color;
	context.strokeStyle=color;
	var active=document.getElementsByClassName('active')[0];
	if(active){
	     active.className='swatch';
	}//end of if
}//end of function

function setSwatch(e){
	var swatch=e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className+=' active';
}//end of function

setSwatch({target: document.getElementsByClassName('swatch')[0]});
