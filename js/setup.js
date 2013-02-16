window.onresize = setupCanvas;
function setupCanvas() {
    if (window.canvas == null) {
	canvas = document.createElement('canvas');
	canvas.id = "canvas1";
	canvas.style.background = 'white';
	canvas.style.zIndex = 10;
	canvas.style.position = "absolute";
	canvas.style.top = "0";
	canvas.style.left ="0";
	canvas.style.display = "none";
	window.canvas = canvas;
	document.body.appendChild(canvas);
    }
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
    } else {
	canvas.width = 600;
	canvas.height = 300;
    }
}
function showCanvas() {
    window.canvas.style.display = "inline";
}
