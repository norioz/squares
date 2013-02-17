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
	canvas.width = 800;
	canvas.height = 480;
    }
}
function showCanvas() {
    window.canvas.style.display = "inline";
}
function hideCanvas() {
    window.cavas.style.display = "none";
}
window.game = {
    "timer_ref" : null,
    "level" : null,
    "start" : function() {
	for (var item in this.level.resources) {
	    var im = new Image();
	    // TODO should be setting a 'loaded' callback here
	    im.src = this.level.resources[item];
	    this.level.resources[item] = im;
	}
	this.level.context = window.canvas.getContext('2d');
	this.timer_ref = window.setInterval(function(){game.level.update();}, 20);
    },
    "stop" : function() {
	window.clearInterval(this.timer_ref);
    },
};