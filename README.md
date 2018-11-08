# Turt2d
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

# Functions


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


uhh... enjoy? <2

-Samuel Reams
-------------------------
