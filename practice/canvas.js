
let canvas = document.getElementById("canvas-1");
/** @type {CanvasRederingContext2d} */
let context = canvas.getContext("2d");
context.fillStyle = "cyan";
context.fillRect(300, 100, 300, 300);	
console.log(context)
context.fillStyle = "white";
context.fillRect(425, 225, 50, 50);
let squares = [];
drawSquare(0, 0, "red");
drawSquare(25, 0, "blue")
drawSquare(50, 0, "orange")
drawSquare(75, 0, "green");
drawSquare(100, 0, "teal");
function drawSquare(x, y, color, size = 25) {
	let square = new Path2D();
	square.rect(x, y, size, size);

	squares.push(square);


	context.fillStyle = color;
	context.fillRect(x, y, 25, 25);
	
}
