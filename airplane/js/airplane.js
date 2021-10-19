var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('airplane', 'assets/img/airplane.png');
    
}

var sprite;
var bmd;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  Click on the left or right of the game to shoot the space ship in that direction

    game.stage.backgroundColor = '#fff';

    bmd = game.add.bitmapData(1600, 800);
    bmd.context.fillStyle = '#ccc';

    var bg = game.add.sprite(0, 0, bmd);

    game.physics.arcade.gravity.y = 50;//100

    sprite = game.add.sprite(32, 450, 'airplane'); // spawning position
    sprite.anchor.set(0.5); // drawing from the tail of airplane

    game.physics.enable(sprite, Phaser.Physics.ARCADE);

    sprite.body.collideWorldBounds = true;
    sprite.body.bounce.set(0.98); // 0.8

    game.input.onDown.add(launch, this);

}

function launch() {

    if (game.input.x < sprite.x)
    {
        sprite.body.velocity.setTo(-200, -200); // (-200, -200)
    }
    else
    {
        sprite.body.velocity.setTo(200, -200); // (200, -200)
    }

}

function update() {

    sprite.rotation = sprite.body.angle;

    bmd.context.fillRect(sprite.x, sprite.y, 1, 1); // 2, 2

    bmd.dirty = true;

}

function render() {

   // game.debug.bodyInfo(sprite, 32, 32);

}