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
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
    } else {
	canvas.width = 200;
	canvas.height = 800;
    }
}
function showCanvas() {
    document.getElementById("canvas1").style.display="inline";
}
