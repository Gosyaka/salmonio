addEventListener('load', initiate);
var canvas;
var arr=[
[120,550,50,150],
[300,550,50,200],
[410,550,50,200],
[500,0,683,20]
];

function initiate() {
	var elem=document.getElementById('canvas');
	canvas=elem.getContext('2d');
	for(var i=0; i<arr.lenght; i++){
	obstacle(arr[i][0],arr[i][1],arr[i][2],arr[i][3]);
	}
	addEventListener ('mousemove', animation)
}

function obstacle(x,y,w,h) {
    canvas.fillStyle='#99753d';
	canvas.strokeStyle='#99753d';	
	canvas.fillRect(x,y,w,h);
	canvas.beginPath();
	canvas.closePath();
				
}

function animation (e) {
	console.log('animation');
	canvas.clearRect (0,0,921,683);
		for(var i=0; i<arr.length; i++){
		obstacle(arr[i][0],arr[i][1],arr[i][2],arr[i][3]);
		}
	bear (e);
    animation_move(e);
	test();
}
function animation_move(e) {
	var img=new Image();
	var xmouse=e.clientX;
	var ymouse=e.clientY;
	img.src='media/img/salmon.png';
	canvas.drawImage(img,xmouse,ymouse);
}
 function bear(e) {
	var xmouse=e.clientX;
    var	ymouse=e.clientY;
    var xeyel=511;
	var yeyel=111;
	var ang=Math.atan2(ymouse-yeyel,xmouse-xeyel);
	var x=xeyel+Math.round(Math.cos(ang)*5);
	var y=yeyel+Math.round(Math.sin(ang)*5);
	var img=new Image()
	img.src='media/img/bear.png';
	canvas.drawImage(img,450,75);
	canvas.beginPath();
	canvas.arc(xeyel,yeyel,12,0,Math.PI*2,false);
	canvas.moveTo(xeyel+70,yeyel);
	canvas.arc(xeyel+26,yeyel,12,0,Math.PI*2,false);
	canvas.fillStyle='white';
	canvas.fill();
	canvas.beginPath();
	canvas.moveTo(x+10,y);
	canvas.arc(x,y,5,0,Math.PI*2,false);
	canvas.moveTo(x+60,y);
	canvas.arc(x+26,y,5,0,Math.PI*2,false);
	canvas.fillStyle='black';
	canvas.fill();
}
/*function test() {
	canvas.font='bold 24px verdone, sans-serif';
	canvas.textAlign='start';
	canvas.fillText('Hello!',100,100);
	var text='Lososio Game';
	var size=canvas.measureText(text);
	canvas.fillText('Lososio Game',100,124);
	canvas.strokeRect(100,100,size.width,24);
	canvas.shadowColor='rgba(0,0,0,0.5)';
	canvas.shadowOffsetX=4;
	canvas.shadowOffsetY=5;
	canvas.shadowBlur=5;	
}*/