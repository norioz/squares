
// A stage is an infinite 2D space.

// A view is a window that shows part of the stage.
// A view is defined by its upper left coordinate, width, and height.

// Sprites are shapes that have display information.
// Sprites define a point relative to their upper left that defines their location (loc).

// Actors are elements on the stage.
// Actors are drawn using one or more sprites.
// Actors are moved relative to the stage.

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
