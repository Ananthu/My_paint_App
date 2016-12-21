var setRadius=function(newRadius){
    if(newRadius<minRad)
        newRadius=minRad;
    else if(newRadius>maxRad)
	newRadius=maxRad;
    radius=newRadius;
    context.lineWidth=radius*2;

    radSpan.innerHTML=radius;
}
var minRad=1,
    maxRad=99,
    defaultRad=20,
    interval=5;
    radSpan=document.getElementById('radval'),
    decRad=document.getElementById('decrad'),
    incRad=document.getElementById('incrad')
decRad.addEventListener('click', function() {
	setRadius(radius-interval);
});
incRad.addEventListener('click', function() {
	setRadius(radius+interval);
});


