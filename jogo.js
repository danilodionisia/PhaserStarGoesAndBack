var game = new Phaser.Game
(800, 600, Phaser.AUTO, '', 
{ 
	preload: preload, 
	create: create, 
	update: update 
});


function preload() {

	game.load.spritesheet('gameboy', 'assets/star.png');

}

var sprite;
var sprite2;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

	game.stage.backgroundColor = '#124184';

	
	

	setNewPosition(100, 1, 50, 300);
	
	

}



function update() {

	game.physics.arcade.collide(sprite, sprite2);
	var sp = sprite.position.x;
	
	if(sp > 750){
		sprite.kill();
		setNewPosition(-100, 750, 300);
	}else if(sp < 50){
		sprite.kill();
		setNewPosition(100, 50, 300);
	}
	
}


function setNewPosition(gravity, posX, posY){
	
	sprite = game.add.sprite(posX, posY, 'gameboy', 2);
	game.physics.arcade.enable(sprite);
	game.physics.arcade.gravity.x = gravity;
}
