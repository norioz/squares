// img,x,y,width,height | x and y from upper left
// the image is 40wx32h
// the canvas is 380x600

/**
 * squares isa level
 */
var squares = {
    "NUM_BLOCKS" : 100,
    "block" : null,
    "timer" : null,
    "context" : null,
    "xCoords" : new Array(),
    "yCoords" : new Array(),
    "xVels" : new Array(),  // in pixels per sec
    "yVels" : new Array(),  // in pixels per sec
    "randInt" : function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    "update" : function() {
	this.context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < squares.NUM_BLOCKS; i++) {
	    this.xCoords[i] = this.xCoords[i] + this.xVels[i] * 0.05;
	    this.yCoords[i] = this.yCoords[i] + this.yVels[i] * 0.05;
	    if (this.xCoords[i] > canvas.width - 40 || this.xCoords[i] < 0) {
		this.xVels[i] = this.xVels[i] * -1;
	    }
	    if (this.yCoords[i] > canvas.height-32 || this.yCoords[i] < 0) {
		this.yVels[i] = this.yVels[i] * -1;
	    }
	    this.context.drawImage(squares.block, this.xCoords[i], this.yCoords[i]);
	}
    },
    "stop" : function() {
	window.clearInterval(this.timer);
    },
    "setup" : function() {
	for (var i = 0; i < this.NUM_BLOCKS; i++) {
	    this.xCoords.push(150);
	    this.yCoords.push(100);
	    this.xVels.push(this.randInt(0, 100));
	    this.yVels.push(this.randInt(0, 100));
	}
	this.timer = window.setInterval(function(){squares.update();}, 20);
	canvas.addEventListener('click', stop, false);
    },
    "run" : function() {
	this.context = window.canvas.getContext('2d');
	this.block = new Image();
	this.block.onload = function () {squares.setup();};
	this.block.src = 'img/Tiles/BlockA0.png';
    }
};


