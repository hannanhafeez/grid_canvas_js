var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
// canvas.style.marginLeft = "2px";
// canvas.style.marginTop = "2px";
settingOnResize();


window.addEventListener('resize', function () {
	settingOnResize();
	randomGrid = makeRandomGrid(rows, cols);
	Dabbay= makeDabbay(rows,cols);
});
var res = 40;
var cols = Math.floor(canvas.width / res);
var rows = Math.floor(canvas.height / res);

var randomGrid = makeRandomGrid(rows, cols);

function makeRandomGrid(ro, co) {
	var Grid = new Array(ro);

	for (let i = 0; i < ro; i++) {
		Grid[i] = new Array();
		for (let j = 0; j < co; j++) {
			Grid[i].push(Math.floor(Math.random() * 2));
		}
	};
	return Grid;
}


function Dabba(x, y, fill) {
	this.x = x;
	this.y = y;
	this.fill = fill;
	this.isMouseIn = function (mX, mY, res) {
		if (mX >= x && mX < x + res && mY >= y && mY < y + res) {
			return true;
		} else {
			return false;
		}
	}
	this.changeFill = function () {
		if (this.isMouseIn(mouse.x,mouse.y,res)){
			if (this.fill == 1) {
				this.fill = 0;
				setInterval(() => {
					this.fill = 1;
				}, 1000);
			} 
				 
		}
	}
	this.draw = function () {
		this.changeFill();
		ctx.beginPath();
		// console.log(this.x, this.y,this.fill);			
		ctx.strokeStyle = 'black';
		ctx.fillStyle = (this.fill == 1) ? 'black' : 'white';
		ctx.rect(this.x, this.y, res, res);
		ctx.stroke();
		ctx.fill();
	}
}


var Dabbay = makeDabbay(rows, cols);

function makeDabbay(r, c) {
	var dabbay = new Array(r);
	for (let i = 0; i < r; i++) {
		dabbay[i] = new Array();
		for (let j = 0; j < c; j++) {
			dabbay[i].push(new Dabba(i * res, j * res,1));
		}
	}
	return dabbay;
}
 var mouse = {
	 x:undefined,
	 y:undefined
 }

canvas.addEventListener('mousemove', function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
	var tempX = Math.floor(mouse.x / res);
	var tempY = Math.floor(mouse.y / res);
	if (mouse.x < rows * res && mouse.y < cols * res) {
		if (randomGrid[tempX][tempY] == 1) {
			randomGrid[tempX][tempY] = 0;
		} else {
			randomGrid[tempX][tempY] = 1;
		}
	}
})


function settingOnResize() {
	canvas.width = window.innerWidth - 5;
	canvas.height = window.innerHeight - 5;
	cols = Math.floor(canvas.width / res);
	rows = Math.floor(canvas.height / res);

}

function update() {
	ctx.strokeStyle = 'black';
	/*
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				if (randomGrid[i][j] == 1) {
					ctx.fillStyle = 'black';
				} else {
					ctx.fillStyle = 'white';
				}
				ctx.beginPath();
				ctx.rect((res * i), (res * j), res, res);
				ctx.fill();
				ctx.stroke();
			}
		}
	*/
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			Dabbay[i][j].draw();
		}
	}
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	update();
}


update();
animate();