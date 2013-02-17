// At the top level a sprites object is a list of sprites.
// Each sprite has a list of actions.
var zombies_sprites = {
    player : {
	sprite_sheet : 'sprite-composite.png',
	width : 64,
	height : 64,
	actions : {
	    stand : {x:0,y:0,num:1},
	    walk : {x:0,y:64,num:10}
	}
    },
    zombie0 : {
	sprite_sheet : 'sprite-composite.png',
	width : 64,
	height : 64,
	actions : {
	    stand : {x:0,y:128,num:11},
	    walk : {x:0,y:192,num:10}
	}
    },
    zombie1 : {
	sprite_sheet : 'sprite-composite.png',
	width : 64,
	height : 64,
	actions : {
	    stand : {x:0,y:256,num:11},
	    walk : {x:0,y:320,num:10}
	}
    }
};