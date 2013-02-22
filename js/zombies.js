// img,x,y,width,height | x and y from upper left
// the image is 2399wx480h
// the canvas is 380x600

/**
 * zombies isa level
 */
var zombies = {
    context : null,
    resources : {
	background : 'img/Backgrounds/ruins.png',
	spritesheet : 'img/sprite-composite.png',
    },
    _scrollx : 0,
    _destx : null,
    _playerx : null,
    _playery : null,
    
    update : function(millis) {
	var bg, x, w, h;
	var bg = this.resources.background;
	var ss = this.resources.spritesheet;
	var x = this._scrollx;
	var w = canvas.width;
	var h = canvas.height;
	
	// update
	var loc = this._scrollx + this._playerx + 32;
//	console.log('dest='+this._destx+' loc='+loc);
	if (loc < this._destx) {
	    this._scrollx += 1;
	} else if (loc > this._destx && loc > 0) {
	    this._scrollx -= 1;
	}
	// draw
	this.context.clearRect(0, 0, canvas.width, canvas.height);
	var sprite = this.sprites.player;
	var act = sprite.actions.stand;
	this.context.drawImage(bg,x,0,w,h,0,0,w,h);
	this.context.fillRect(this._playerx,this._playery,sprite.width,sprite.height);
	this.context.drawImage(ss,act.x,act.y,sprite.width,sprite.height,this._playerx,this._playery,sprite.width,sprite.height);
    },
    setup : function() {
	this._playerx = window.canvas.width / 2 - 32;
	this._destx = this._playerx + 32;
	this._playery = window.canvas.height / 2 + 80;
    },
    click : function(x, y) {
	if ((x >= this._playerx && x < this._playerx + 64) &&
	    (y >= this._playery && y < this._playery + 64)) {
	    alert('go!');
	    return;
	}
	this._destx = x;
    },
    sprites : {
	player : {
	    width : 64,
	    height : 64,
	    rate : 100,
	    actions : {
		stand : {x:0,y:0,num:1},
		walk : {x:0,y:64,num:10}
	    }
	},
	zombie0 : {
	    width : 64,
	    height : 64,
	    rate : 100,
	    actions : {
		stand : {x:0,y:128,num:11},
		walk : {x:0,y:192,num:10}
	    }
	},
	zombie1 : {
	    width : 64,
	    height : 64,
	    rate : 100,
	    actions : {
		stand : {x:0,y:256,num:11},
		walk : {x:0,y:320,num:10}
	    }
	}
    }
};
