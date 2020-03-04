console.log("Script ready");
	function moveBall(dx,dy){
	let BallElem=document.getElementById("ball");
console.log(BallElem.offsetLeft);
BallElem.style.Left = (BallElem.offsetLeft+dx)+"px";
BallElem.style.Top = (BallElem.offsetTop+dy)+"px";
}

function moveBall2(dx,dy){
let ballElem2=document.getElementById("ball2");
console.log(BallElem2.offsetLeft);
BallElem2.style.Left = (BallElem2.offsetLeft+dx)+"px";
BallElem2.style.Left = (BallElem2.offsetLeft+dy)+"px";
}

let vx=3;
let vy=1;

	let Balls=[
	{id:'Ball', x:30, y:30, vx:1, vy:1 },
	{id:'square', x:430, y:330, vx:-1, vy:1}
	]

function bounceBalls(){

	let fieldElem=document.getElementById("field");
	let ballElem=document.getElementById("ball");
	
	for(let ball of balls){

		let ballElem=document.getElementById(ball.id);
 
ballElem.style.left = (ballElem.offsetLeft+ball.vx)+"px";
ballElem.style.top=(ballElem.offsetTop+ball.vy)+"px";
console.log(fieldElem.offsetHeight);

if(ballElem.offsetTop+ballElem.offsetHeight>=fieldElem.offsetHeight||ballElem.offsetTop<=0)
ball.vy=-ball.vy;
if(ballElem.offsetLeft+ballElem.offsetWidth>=fieldElem.offsetWidth||ballElem.offsetLeft<=0)
ball.vx=-ball.vx;
}
}

function bounceBall(){

	let fieldElem=document.getElementById("field");
	let ballElem=document.getElementById("ball");
     
ballElem.style.left = (ballElem.offsetLeft+vx)+"px";
ballElem.style.top=(ballElem.offsetTop+vy)+"px";
console.log(fieldElem.offsetHeight);

if(ballElem.offsetTop+ballElem.offsetHeight>=fieldElem.offsetHeight||ballElem.offsetTop<=0)
vy=-vy;
console.log(ballElem.offsetLeft,ballElem.offsetWidth,fieldElem.offsetWidth,ballElem.offsetLeft);
if(ballElem.offsetLeft+ballElem.offsetWidth>=fieldElem.offsetWidth||ballElem.offsetLeft<=0)
	vx=-vx;

}



function bounceBall2(){
	let ballElem2=document.getElementById("ball2");

console.log(ballElem2.offsetLeft);
if(ballElem2.offsetLeft<800)
ballElem2.style.left = (ballElem.offsetLeft+1)+"px";
if(ballElem2.offsetTop<600)
ballElem2.style.Top = (ballElem.offsetTop+1)+"px";


}

setInterval(bounceBall, 10);

