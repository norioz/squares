/**
 * A Stage is a cartesian coordinate plane that has multiple layers.
 * It's basic function is to keep track of the relative position of
 * multiple actors that have been added onto its layers.
 */
function Stage(width, height) {
    this.width = width;
    this.height = height;
    this.layers = new Array();
}
Stage.prototype.add = function(actor, layer_num) {  // Adds an actor into a layer on the stage.
    var arr = this.layers[layer_num];
    if (typeof arr == 'undefined') {
	arr = new Array();
	layers[layer_num] = arr;
    }
    arr.push(actor);
};
Stage.prototype.remove = function(actor_name) {  // Removes all actors with the given actor_name from the stage.
    for (var arr in this.layers) {
	for (var i = 0; i < arr.length; i++) {
	    if (a.name == actor_name) {
		arr.splice(i, 1);
	    }
	}
    }
};
Stage.prototype.update = function(millis) {  // Updates the state of the stage by a number of milliseconds.
    for (var arr in this.layers) {
	for (var actor in arr) {
	    actor.update(millis);
	}
    }
};

// A spritesheet is an image where each row defines a single action.
// Actions for multiple sprites may be put in one sheet.
// Each spritesheet has an associated sprites
/**
 *
 */
function Spritesheet(imgPath, props) {
    var self = this;
    this.imgPath = imgPath;
    this.img = new Image();
    this.img.onload = function() {
    	self.loadSprites();
    };
    this.img.src = imgPath;
    this.props = props;
    this.ready = false;
}
Spritesheet.prototype.loadSprites = function() {
    this.ready = true;
};
Spritesheet.prototype.actor = function(spriteName) {
    if (typeof this.props[spriteName] == 'undefined') {
	throw 'undefined sprite name: ' + spriteName;
    }
    return new Actor(this.img, this.props[spriteName]);
};
// TODO I don't know if the loadSprites callback is really needed here.
//      We might just want to plop all the images into the layout invisibly
//      and go off the full document load.


// Sprites are templates from which actors can be created.
// A sprite has one or more actions.
// Each action has a durration (in milliseconds) and a name.
// The default action is named 'default'.
// ------
// Sprites are basically lists of Image objects and their required metadata.
// Sprites should be considerred immutable.
//   actor() -- creates an actor from the sprite

// Actors are elements on the stage.
// Many actors can be created from a single sprite.
// Actors are moved relative to the stage.
// -----
// Actors are thin objects, referring back to their sprite for Image information.
// They keep track of executional state: absolute position, frame in animation, etc.
//     moveTo(x, y)  -- moves the actor's pivot to (x,y) on the stage
//     do('action', repeat)  -- causes the actor to do the action named 'action'
//                              if repeat is true then the action is repeated
//                              if repeat is false then the final frame in the action is held
//     rasterize()  -- returns the image that represents the actors current visuals
function Actor(img, props, x, y) {
    this.img = img;
    this.props = props;
    this.x = x;
    this.y = y;
    this.destX = x;
    this.destY = y;
    this.currentAction = null;
    this.actionRepeat = true;
}
Actor.prototype.setAction = function(actionName, repeat) {
    this.currentAction = actionName;
    this.repeat = repeat;
};
Actor.prototype.moveTo = function(x, y) {
    // TODO unimplemented
};

// A view is a window that shows part of the stage.
// A view is defined by its upper left coordinate, width, and height.
// A view has a reference to its associated stage.
// ------
// A view is hasa html5 canvas element to draw on.
function View(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    this.x = 0;
    this.y = 0;
}
View.prototype.draw = function() {
    var context, layers;
    context = window.canvas.getContext('2d');
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    layers = this.stage.layers;
    // TODO this could be MUCH more efficient
    //      we don't really want to iterate through all actors
    for (var l in layers) {
	for (var actor in l) {
	    if (isInView(actor)) {
		
	    }
	}
    }
};
View.prototype.isInView = function(actor) {
};


// -------------------------

// For a given drawing cycle:
// 1) Clear the view
// 2) Get everything that is within view.
// 3) Draw them in their positions

var me = {
fname : "brett",
lname : "groshong"
}

function person(fname, lname)
{
this.fname = fname;
this.lname = lname;
}
var myself = new person("brett", "groshong"); 
