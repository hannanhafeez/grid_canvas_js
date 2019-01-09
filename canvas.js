var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
settingOnResize();

window.addEventListener('resize', function () {
	settingOnResize();
});

function settingOnResize() {
	canvas.width = window.innerWidth - 10;
	canvas.height = window.innerHeight - 10;
	canvas.style.marginLeft = "2px";
	canvas.style.marginTop = "2px";
}
var res = 30;
var cols = canvas.width / res;
var rows = canvas.height / res;

function draw() {
	
}
