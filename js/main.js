var KEYCODE_SPACE = 32; 	//usefull keycode
var KEYCODE_UP = 38; 	//usefull keycode
var KEYCODE_LEFT = 37; 	//usefull keycode
var KEYCODE_RIGHT = 39; 	//usefull keycode
var KEYCODE_W = 87; 		//usefull keycode
var KEYCODE_A = 65; 		//usefull keycode
var KEYCODE_D = 68; 		//usefull keycode

var canvas;
var stage;
var screen_width;
var screen_height;
var bmpSeq;
var backgroundSeqTile1, backgroundSeqTile2, backgroundSeqTile3;
var Monsters;
var Hero;
var contentManager;

function init() {
    //find canvas and load images, wait for last image to load
    canvas = document.getElementById("testCanvas");

    // create a new stage and point it at our canvas:
    stage = new createjs.Stage(canvas);

    // grab canvas width and height for later calculations:
    screen_width = canvas.width;
    screen_height = canvas.height;

    contentManager = new ContentManager();
    contentManager.SetDownloadCompleted(startGame);
    contentManager.StartDownload();
}

function reset() {
    stage.removeAllChildren();
    createjs.Ticker.removeAllListeners();
    stage.update();
}

// Create a random background based on
// the 3 different layers available
function CreateAndAddRandomBackground() {
    // random number between 0 & 2.
    var randomnumber = Math.floor(Math.random() * 3)

    backgroundSeqTile1 = new createjs.Bitmap(contentManager.imgBackgroundLayers[0][randomnumber]);
    backgroundSeqTile2 = new createjs.Bitmap(contentManager.imgBackgroundLayers[1][randomnumber]);
    backgroundSeqTile3 = new createjs.Bitmap(contentManager.imgBackgroundLayers[2][randomnumber]);

    stage.addChild(backgroundSeqTile1);
    stage.addChild(backgroundSeqTile2);
    stage.addChild(backgroundSeqTile3);
}

function startGame() {
    // Random number to set the Y position
    // of our Hero & Enemies
    var randomY;
    
    CreateAndAddRandomBackground();

    // Our hero can be moved with the arrow keys (left, right)
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;

    // Creating the Hero
    randomY = 32 + (Math.floor(Math.random() * 7) * 64);
    Hero = new Player(contentManager.imgPlayer, screen_width);
    Hero.x = 400;
    Hero.y = randomY;

    //Tile where the hero & the enemies will be able to walk on to
    bmpSeqTile = new createjs.Bitmap(contentManager.imgTile);
    bmpSeqTile.regX = bmpSeqTile.frameWidth / 2 | 0;
    bmpSeqTile.regY = bmpSeqTile.frameHeight / 2 | 0;

    // Taking the same tile all over the width of the game
    for (var i = 0; i < 20; i++) {
        // clone the original tile, so we don't need to set shared properties:
        var bmpSeqTileCloned = bmpSeqTile.clone();

        // set display properties:
        bmpSeqTileCloned.x = 0 + (i * 40);
        bmpSeqTileCloned.y = randomY + 32;

        // add to the display list:
        stage.addChild(bmpSeqTileCloned);
    }

    // Our Monsters collection
    Monsters = new Array();

    // Creating the first type of monster
    randomY = 32 + (Math.floor(Math.random() * 7) * 64);
    Monsters[0] = new Monster("MonsterA", contentManager.imgMonsterA, screen_width);
    Monsters[0].x = 20;
    Monsters[0].y = randomY;

    // Creating the second type of monster
    randomY = 32 + (Math.floor(Math.random() * 7) * 64);
    Monsters[1] = new Monster("MonsterB", contentManager.imgMonsterB, screen_width);
    Monsters[1].x = 750;
    Monsters[1].y = randomY;

    // Creating the third type of monster
    randomY = 32 + (Math.floor(Math.random() * 7) * 64);
    Monsters[2] = new Monster("MonsterC", contentManager.imgMonsterC, screen_width);
    Monsters[2].x = 100;
    Monsters[2].y = randomY;

    // Creating the forth type of monster
    randomY = 32 + (Math.floor(Math.random() * 7) * 64);
    Monsters[3] = new Monster("MonsterD", contentManager.imgMonsterD, screen_width);
    Monsters[3].x = 650;
    Monsters[3].y = randomY;

    // Adding all the monsters to the stage
    for (var i=0; i<Monsters.length;i++){
        stage.addChild(Monsters[i]);
    }
    stage.addChild(Hero);
        
    // we want to do some work before we update the canvas,
    // otherwise we could use Ticker.addListener(stage);
    createjs.Ticker.addListener(window);
    // Best Framerate targeted (60 FPS)
    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(60);
}

function tick() {
    // looping inside the Monsters collection
    for (monster in Monsters) {
        var m = Monsters[monster];
        // Calling explicitly each tick method 
        // to launch the update logic of each monster
        m.tick();
        
        // If the Hero is still alive and if he's too near
        // from one of the monster...
        if (Hero.alive && m.hitRadius(Hero.x, Hero.y, Hero.hit)) {
            //...he must die unfortunately!
            Hero.alive = false;

            // Playing the proper animation based on
            // the current direction of our hero
            if (Hero.direction == 1) {
                Hero.gotoAndPlay("die_h");
            }
            else {
                Hero.gotoAndPlay("die");
            }

            continue;
        }
    }

    // Update logic of the hero
    Hero.tick();

    // update the stage:
    stage.update();
}

function handleKeyDown(e) {
    //cross browser issues exist
    if (!e) { var e = window.event; }
    switch (e.keyCode) {
        case KEYCODE_A: ;
        case KEYCODE_LEFT:
            // We're launching the walk_left animation
            if (Hero.alive && Hero.isInIdleMode) {
                Hero.gotoAndPlay("walk");
                Hero.direction = -1;
                Hero.isInIdleMode = false;
            }
            break;
        case KEYCODE_D: ;
        case KEYCODE_RIGHT:
            // We're launching the walk_right animation
            if (Hero.alive && Hero.isInIdleMode) {
                Hero.gotoAndPlay("walk_h");
                Hero.direction = 1;
                Hero.isInIdleMode = false;
            }
            break;
    }
}

function handleKeyUp(e) {
    //cross browser issues exist
    if (!e) { var e = window.event; }
    switch (e.keyCode) {
        case KEYCODE_A: ;
        case KEYCODE_LEFT: ;  
        case KEYCODE_D: ;
        case KEYCODE_RIGHT:
            if (Hero.alive) {
                Hero.isInIdleMode = true;
                Hero.gotoAndPlay("idle");
            }
            break;
    }
}
