var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
// canvas.style.marginLeft = "2px";
// canvas.style.marginTop = "2px";
settingOnResize();

window.addEventListener('resize', function () {
	settingOnResize();
	randomGrid = makeRandomGrid(rows, cols);
});
var res = 20;
var cols = Math.floor(canvas.width / res);
var rows = Math.floor(canvas.height / res);

var randomGrid;

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


function settingOnResize() {
	canvas.width = window.innerWidth - 5;
	canvas.height = window.innerHeight - 5;
	cols = Math.floor(canvas.width / res);
	rows = Math.floor(canvas.height / res);
}
randomGrid = makeRandomGrid(rows, cols);

function update() {
	ctx.strokeStyle = 'black';
	
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (randomGrid[i][j]==1) {
				ctx.fillStyle = 'black';
			}else{
				ctx.fillStyle = 'white';
			}
			ctx.beginPath();
			ctx.rect((res * i), (res * j), res, res);
			ctx.fill();
			ctx.stroke();
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