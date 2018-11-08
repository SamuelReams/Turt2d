/*
  Copyright 2018 Samuel Reams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
IN THE SOFTWARE.
*/
/*
To run on top of Code.org's turtle programming in javascript
Functions included:

rect(x, y, width, height);
circle(size);
beginPath();
endPath();
triangle(x, y, size);
star(x, y, size);
shape(size, shape, color, thicc);
forwardu();
backward();
leftu();
rightu();
perlinNoise(value);
*/



/* variables */
var c = document.querySelector("canvas");
var ctx = c.getContext("2d");
var turt = new Turtel(1, c.width/2, c.height/2);
//turt.show();

function Turtel(size, x, y) {
	this.size = size;
	this.x = x;
	this.y = y;
	this.show = function() {
		ctx.beginPath();
		ctx.arc(x,y,50,0,2*Math.PI);
		ctx.stroke();
	};
	this.hide = function() {}
}
function getX() {return(turt.x);}
function getY() {return(turt.y);}
function moveTo(x, y) {turt.x = x; turt.y = y;}
function penDown() {
	ctx.beginPath();
}
function penUp() {stroke();}
function dot() {}
function moveForward(p) {turt.y -= 10;}
function moveLeft(d) {turt.x += 10;}
function moveRight(d) {turt.x -= 10;}
function moveBackward(p) {turnRight(180); moveForward(p); turnRight(180);}
function arcRight(x, y, radius, start, end) {ctx.arc(x, y, radius, start, end);}
function arcLeft(x, y, radius, start, end) {ctx.arc(x, y, radius, start, end, true);}
function penColor(color) {ctx.strokeStyle = color;} /*changes the pen's color I guess */
function penWidth(i) {ctx.lineWidth = i;} /*changes the pen's width I guess*/



/* part two -----------------------------------------------------------
---------------------------------
---------------------------------
*/
/*Variables*/
var x = getX();
var y = getY();
var moveFar = 20;
var frameRate = 30;
var convertedFrames = 1000/30;
var frame;

/*Utility Functions*/

		penWidth(10);
function customTurtleFunctions(){
  var x = getX();
  var y = getY();
  this.fillRect = function(xcoord, ycoord, width, height) {/*Draw Rectangle*/ moveTo(xcoord, ycoord);penDown();moveForward(height);turnLeft();moveForward(width);turnLeft();moveForward(height);turnLeft();moveForward(width);turnRight();turnRight();penUp();turnRight();};
  this.rect = function(xcoord, ycoord, width, height) {/*Draw Rectangle*/x = getX(); y = getY();moveTo(xcoord, ycoord);/*penDown();*//*moveForward(height);turnLeft();moveForward(width);turnLeft();moveForward(height);turnLeft();moveForward(width);turnRight();turnRight();penUp();turnRight();*/ctx.fillRect(xcoord, ycoord, width, height);ctx.stroke();
	};
  this.beginPath = function() {penDown();};
  this.endPath = function(){penUp();};
  this.circle = function(size) {arcRight(360, size)};
  this.colorInit = function(color, width) {penColor(color);penWidth(width);penDown();};
  this.shape = function(size, shape, color, thicc){this.size = size;this.shape = shape;this.color = color;this.width = thicc;this.angle;this.sides;this.draw = function() {if(this.shape == "square") {this.angle = 90;this.sides = 4;this.colorInit(this.color, this.width);moveForward(this.size);turnRight(this.angle);moveForward(this.size);turnRight(this.angle);moveForward(this.size);turnRight(this.angle);moveForward(this.size);} else if(this.shape =="triangle") {this.sides = 3;this.angle = 120;this.colorInit(this.color, this.width);/*while(i = 0, i < this.sides, i++) {*/moveForward(this.size);turnRight(this.angle);moveForward(this.size);turnRight(this.angle);moveForward(this.size);turnRight(this.angle);/*}*/} else if(this.shape == "circle") {this.colorInit(this.color, this.width);this.angle = 360;arcRight(this.angle, this.size);}};this.draw();};
  this.star = function(xcoord, ycoord, size){for(var i = 0; i < 5; i++) {moveForward(size);turnRight((360*5)/(5*(size/360)));}};
	this.line = function(x1, y1, x2, y2) {
		penDown();
		turt.x = x1;
		turt.y = y1;
		ctx.moveTo(turt.x, turt.y);
		turt.x = x2;
		turt.y = y2;
		ctx.lineTo(turt.x, turt.y);
		ctx.stroke();		
	}
  this.forwardu = function() {penUp();moveForward(moveFar);};
  this.backward = function() {penUp();moveBackward(moveFar);};
  this.leftu = function() {moveLeft(moveFar);};
  this.rightu = function () {moveRight(moveFar);};
  this.m = function(dir) {
    if(dir=="forward") {/*MOVES FORWARD*/this.forwardu();}
    else if(dir == "backward") {/*MOVES BACKWARD*/this.backward();}
    else if(dir == "left") {/*MOVES LEFT*/this.leftu();}
    else if(dir == "right") {/*MOVES RIGHT*/this.rightu();}};
    this.SimplexNoise=function(t){null==t&&(t=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var i=0;i<256;i++)this.p[i]=Math.floor(256*t.random());this.perm=[];for(i=0;i<512;i++)this.perm[i]=this.p[255&i];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]},this.SimplexNoise.prototype.dot=function(t,i,r){return t[0]*i+t[1]*r},this.SimplexNoise.prototype.noise=function(t,i){var r,h,s=(t+i)*(.5*(Math.sqrt(3)-1)),o=Math.floor(t+s),e=Math.floor(i+s),p=(3-Math.sqrt(3))/6,m=(o+e)*p,a=t-(o-m),d=i-(e-m);d<a?(r=1,h=0):(r=0,h=1);var n=a-r+p,l=d-h+p,f=a-1+2*p,M=d-1+2*p,g=255&o,u=255&e,v=this.perm[g+this.perm[u]]%12,x=this.perm[g+r+this.perm[u+h]]%12,c=this.perm[g+1+this.perm[u+1]]%12,N=.5-a*a-d*d,S=.5-n*n-l*l,y=.5-f*f-M*M;return 70*((N<0?0:(N*=N)*N*this.dot(this.grad3[v],a,d))+(S<0?0:(S*=S)*S*this.dot(this.grad3[x],n,l))+(y<0?0:(y*=y)*y*this.dot(this.grad3[c],f,M)))},this.SimplexNoise.prototype.noise3d=function(t,i,r){var h,s,o,e,p,m,a=(t+i+r)*(1/3),d=Math.floor(t+a),n=Math.floor(i+a),l=Math.floor(r+a),f=1/6,M=(d+n+l)*f,g=t-(d-M),u=i-(n-M),v=r-(l-M);u<=g?v<=u?(p=e=h=1,m=o=s=0):v<=g?(p=o=s=0,m=e=h=1):(p=s=h=0,m=e=o=1):u<v?(e=s=h=0,m=p=o=1):g<v?(e=o=h=0,m=p=s=1):(p=e=s=1,m=o=h=0);var x=g-h+f,c=u-s+f,N=v-o+f,S=g-e+2*f,y=u-p+2*f,q=v-m+2*f,b=g-1+.5,j=u-1+.5,k=v-1+.5,w=255&d,z=255&n,A=255&l,B=this.perm[w+this.perm[z+this.perm[A]]]%12,C=this.perm[w+h+this.perm[z+s+this.perm[A+o]]]%12,D=this.perm[w+e+this.perm[z+p+this.perm[A+m]]]%12,E=this.perm[w+1+this.perm[z+1+this.perm[A+1]]]%12,F=.6-g*g-u*u-v*v,G=.6-x*x-c*c-N*N,H=.6-S*S-y*y-q*q,I=.6-b*b-j*j-k*k;return 32*((F<0?0:(F*=F)*F*this.dot(this.grad3[B],g,u,v))+(G<0?0:(G*=G)*G*this.dot(this.grad3[C],x,c,N))+(H<0?0:(H*=H)*H*this.dot(this.grad3[D],S,y,q))+(I<0?0:(I*=I)*I*this.dot(this.grad3[E],b,j,k)))};
	
	
}
/*Can be called from console
forward();
backward();
left();
right();
*/

/*more functionis*/
var t = new customTurtleFunctions;

function shape(size, shape, color, thicc) {this.size = size;this.shape = shape;this.color = color;this.width = thicc;this.angle;this.sides;this.draw = function() {if(this.shape == "square") {this.angle = 90;this.sides = 4;t.colorInit(this.color, this.width);moveForward(this.size);turnRight(this.angle);moveForward(this.size);turnRight(this.angle);moveForward(this.size);turnRight(this.angle);moveForward(this.size);} else if(this.shape =="triangle") {this.sides = 3;this.angle = 120;t.colorInit(this.color, this.width);/*while(i = 0, i < this.sides, i++) {*/moveForward(this.size);turnRight(this.angle);moveForward(this.size);turnRight(this.angle);moveForward(this.size);turnRight(this.angle);/*}*/} else if(this.shape == "circle") {t.colorInit(this.color, this.width);this.angle = 360;arcRight(this.angle, this.size);}};this.draw();};
  

function forward() {t.move("forward");}
function backward(){t.move("backward");}
function right() {t.move("right");}
function left() {t.move("left");}
function background(color) {penColor(color); ctx.fillStyle = color.toString();;; ctx.fillRect(0, 0, 1000, 1000)};
function initFrames() {frame = 0;}
function showFrames() {console.log("Frame:" + frame);}
function animations() {
		init();
		var animate = setInterval(draw, convertedFrames);
	}
/*End utility Functions
Main Code*/
/*Animate Functions*/




/*
function init() {
  frameRate = 30;
  initFrames();
  counter = 0;
}
*/
/*
function draw() {
  background("lightblue");
  /*Put your main animations and code here*/
	  
  
  
  /*log frame*/
  /*showFrames();
}

*/
/*Run Code*/
//animations();
