# Turt2D :turtle:
-------------------------

Turt2D is an engaging, turtle programming library that runs on top of Javascript. <br />
<br />
nah fam I'm just kidding but like use it if you want, it has some utility functions that are helpful whilst drawing in 2d space in javascript <br />

# How to Use
-------------------------
Example program (draws a blue rectangle on a light blue background):
```javascript
function init() {
  frameRate = 30; /*To make a set frame rate*/
  initFrames();
}

function draw() {
  background("lightblue");
  /*Put your main animations and code here*/
	
	penColor("blue");  
  t.rect(turt.x, turt.y, 200, 200);
	
  showFrames();
}


/*Run Code*/
animations();
```

### Functions
-------------------------
:turtle:

rect(x, y, width, height); <br />
shape(size, shape, color(square, triangle, and circle), thiccness); <br />
arcRight(x, y, radius, start, end); <br />
arcLeft(x, y, radius, start, end); <br />
star(); <br />
beginPath(); <br />
endPath(); <br />

penColor(); <br />
penWidth(); <br />

getX();    --returns turtle X coordinate <br />
getY();    --returns turtle y coordinate <br />
forward(distance);     --moves turtle forward (up) <br />
backward(distance);    --moves turtle backward (down) <br />
left(distance);        --moves turtle left <br />
right(distance);       --moves turtle right <br />
moveTo(x, y);          --moves turtle to specified x and y coordinates <br />

background(color);  --sets the background of the canvas to a specified color <br />

perlinNoise(value); --returns perlin noise function at the value <br />

turt   --the main turtle object (if you want to add stuff to it) <br />
turt.x --variable for turtle x coordinate <br />
turt.y --variable for turtle y coordinate <br />

<br />
# Import
-------------------------

All you have to do to import Turt2D into your project is to put it in a script tag.<br />
(along with your main javascript file as well)
```html
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<canvas></canvas>
		<script src="https://raw.githubusercontent.com/SamuelReams/Turt2d/master/turt2d.js"></script>
		<script src="sketch.js"></script>
	</body>
</html>
```
That's it!
------------------------
uhh... enjoy? <2

### - Samuel Reams :neckbeard: :turtle:
-------------------------
