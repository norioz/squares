window.onresize = setupCanvas;
function setupCanvas() {
    var width, height, canvas;
    canvas = document.getElementById('canvas1');
    if (canvas == null) {
	canvas = document.createElement('canvas');
	canvas.id = "canvas1";
	canvas.style.background = 'white';
	canvas.style.zIndex = 10;
	canvas.style.position = "absolute";
	canvas.style.top = "0";
	canvas.style.left ="0";
	canvas.style.display = "none";
	document.body.appendChild(canvas);
    }
    if (typeof PhoneGap === 'undefined') {
	canvas.width = 600;
	canvas.height = 400;
    } else {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
    }
}
function showCanvas() {
    document.getElementById("canvas1").style.display="inline";
}
