window.onresize = setupCanvas;
function setupCanvas() {
    if (window.canvas == null) {
	canvas = document.createElement('canvas');
	canvas.id = "canvas1";
	canvas.onclick = function(e) {
	    var mouseX, mouseY;
	    if (e.offsetX) {
		mouseX = e.offsetX;
		mouseY = e.offsetY;
	    }
	    else if (e.layerX) {
		mouseX = e.layerX;
		mouseY = e.layerY;
	    }
	    window.game.level.click(mouseX, mouseY);
	};
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
	// allow the level to setup
	this.level.setup();
	this.timer_ref = window.setInterval(function() {
	    var t = Date.now();
	    var delta = t - game.lastUpdate;
	    game.level.update(delta);
	    game.lastUpdate = t;
	}, 20);
    },
    "stop" : function() {
	window.clearInterval(this.timer_ref);
    },
};