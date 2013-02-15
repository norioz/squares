// img,x,y,width,height | x and y from upper left
// the image is 40wx32h
// the canvas is 380x600
var NUM_BLOCKS = 100;
var block;

var xCoords = new Array();
var yCoords = new Array();
var xVels = new Array();    // in pixels per sec
var yVels = new Array();    // in pixels per sec

var canvas;
var context;

var timer;

function randInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < NUM_BLOCKS; i++) {
	xCoords[i] = xCoords[i] + xVels[i] * 0.05;
	yCoords[i] = yCoords[i] + yVels[i] * 0.05;
	if (xCoords[i] > canvas.width-40 || xCoords[i] < 0) {
	    xVels[i] = xVels[i] * -1;
	}
	if (yCoords[i] > canvas.height-32 || yCoords[i] < 0) {
	    yVels[i] = yVels[i] * -1;
	}
	context.drawImage(block, xCoords[i], yCoords[i]);
    }
}

function setup() {
    context.drawImage(block, 150, 100);
    for (var i = 0; i < NUM_BLOCKS; i++) {
	xCoords.push(150);
	yCoords.push(100);
	xVels.push(randInt(0, 100));
	yVels.push(randInt(0, 100));
    }
    timer = window.setInterval(update, 20);
}

function load() {
    block = new Image();
    block.onload = setup;
    block.src = 'img/Tiles/BlockA0.png';
    canvas = document.getElementById('canvas1');
    context = canvas.getContext('2d');
}
