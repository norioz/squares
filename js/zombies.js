// img,x,y,width,height | x and y from upper left
// the image is 2399wx480h
// the canvas is 380x600

/**
 * zombies isa level
 */
var zombies = {
    context : null,
    resources : {
	background : 'img/Backgrounds/ruins.png'
    },
    _xPos : 0,
    update : function() {
	var bg, x, w, h;
	var bg = this.resources.background;
	var x = this._xPos;
	var w = canvas.width;
	var h = canvas.height;
	// update
	if (x < 2398 - w) {
	    this._xPos = this._xPos + 1;
	} else {
	    game.stop();
	}
	// draw
	this.context.clearRect(0, 0, canvas.width, canvas.height);
	this.context.drawImage(bg,x,0,w,h,0,0,w,h);
    }
};
