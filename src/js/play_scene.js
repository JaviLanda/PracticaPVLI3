'use strict';

//Enumerados: PlayerState son los estado por los que pasa el player. Directions son las direcciones a las que se puede
//mover el player.
var PlayerState = {'JUMP':0, 'RUN':1, 'FALLING':2, 'STOP':3}
var Direction = {'LEFT':0, 'RIGHT':1, 'NONE':3}
var enemyGroup;
var music;
var jumpSound;

//Scena de juego.
var PlayScene = {
    _rush: {}, //player
    _speed: 300, //velocidad del player
    _jumpSpeed: 600, //velocidad de salto
    _jumpHight: 150, //altura máxima del salto.
    _playerState: PlayerState.STOP, //estado del player
    _direction: Direction.NONE,  //dirección inicial del player. NONE es ninguna dirección.
    enemy1:{},
    enemy2:{},
    enemy3:{},
    enemy4:{},
    enemy5:{},
    enemy6:{},
    enemy7:{},
    enemy8:{},
    enemy9:{},
    enemy10:{},
    enemy11:{},
    enemy12:{},
    enemy13:{},
    enemy14:{},
    enemy15:{},
    enemy16:{},

    coltan:{},
	 

    //Método constructor...
  create: function () {

  	  jumpSound = this.game.add.audio('salto');
  	  music = this.game.add.audio('musiclvl1');
  	  music.play();

      //creacion del mapa
      this.map = this.game.add.tilemap('tilemap');
      this.map.addTilesetImage('terrain_atlas','tiles');
      this.map.addTilesetImage('terrain-Derivation_5','tiles2');

      //creacion de las capas
      this.backgroundLayer = this.map.createLayer('fondo');
      this.groundLayer = this.map.createLayer('platforms');
      this.death = this.map.createLayer('death');

      this.map.setCollisionBetween(1, 5000, true, 'death');
      this.map.setCollisionBetween(1, 5000, true, 'platforms');
      
      this.groundLayer.setScale(1.2, 1.2);
      this.backgroundLayer.setScale(1.2, 1.2);
      this.death.setScale(1.2, 1.2);

      this.death.visible = true;

      //Añadimos los sprites de las entidades
      this._rush = this.game.add.sprite(700, 3700, 'personaje');
      this.coltan = this.game.add.sprite(720, 7500, 'coltan');
      
      enemyGroup = this.game.add.group();
      enemyGroup = this.game.add.physicsGroup();
      this._rush.scale.setTo(0.75, 0.75);
      this.coltan.scale.setTo(0.5, 0.5);
      this.enemy = this.game.add.sprite(310, 400, 'enemy', 0, enemyGroup);
      this.enemy2 = this.game.add.sprite(340, 770, 'enemy', 0, enemyGroup);
      this.enemy3 = this.game.add.sprite(325, 1160, 'enemy', 0, enemyGroup);
      this.enemy4 = this.game.add.sprite(170, 1710, 'rata', 0, enemyGroup);
      this.enemy5 = this.game.add.sprite(350, 970, 'topo', 0, enemyGroup);
      this.enemy6 = this.game.add.sprite(400, 2200, 'enemy', 0, enemyGroup);
      this.enemy7 = this.game.add.sprite(225, 2785, 'rata', 0, enemyGroup);
      this.enemy8 = this.game.add.sprite(300, 3000, 'dragon', 0, enemyGroup);
      this.enemy9 = this.game.add.sprite(350, 3600, 'enemy', 0, enemyGroup);
      this.enemy10 = this.game.add.sprite(260, 4200, 'enemy', 0, enemyGroup);
      this.enemy11 = this.game.add.sprite(300, 4625, 'rata', 0, enemyGroup);
      this.enemy12 = this.game.add.sprite(300, 4900, 'enemy', 0, enemyGroup);
      this.enemy13 = this.game.add.sprite(350, 5615, 'topo', 0, enemyGroup);
      this.enemy14 = this.game.add.sprite(425, 6000, 'dragon', 0, enemyGroup);
      this.enemy15 = this.game.add.sprite(270, 6700, 'enemy', 0, enemyGroup);
      this.enemy16 = this.game.add.sprite(300, 7200, 'dragon', 0, enemyGroup);

      this.enemy8.scale.setTo(0.5, 0.5);
      this.enemy14.scale.setTo(0.5, 0.5);
      this.enemy16.scale.setTo(0.5, 0.5);

      //Limites y fisicas
      this.game.world.setBounds(0, 0, 2000, 2700);
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
	    this.game.stage.backgroundColor = '#000000';
      this.game.physics.arcade.gravity.y = 300;
      this.game.physics.enable(this._rush, Phaser.Physics.ARCADE);
      this.game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
      this.game.physics.enable(this.coltan, Phaser.Physics.ARCADE);
      
      //Fisicas para que los enemigos vuelen
      this.enemy.body.immovable = true;
      this.enemy.body.collideWorldBounds = true;
      this.enemy.body.allowGravity = false;
      this.enemy2.body.immovable = true;
      this.enemy2.body.collideWorldBounds = true;
      this.enemy2.body.allowGravity = false;
      this.enemy3.body.immovable = true;
      this.enemy3.body.collideWorldBounds = true;
      this.enemy3.body.allowGravity = false;
      this.enemy4.body.immovable = true;
      this.enemy4.body.collideWorldBounds = true;
      this.enemy4.body.allowGravity = false;
      this.enemy5.body.immovable = true;
      this.enemy5.body.collideWorldBounds = true;
      this.enemy5.body.allowGravity = false;
      this.enemy6.body.immovable = true;
      this.enemy6.body.collideWorldBounds = true;
      this.enemy6.body.allowGravity = false;
      this.enemy7.body.immovable = true;
      this.enemy7.body.collideWorldBounds = true;
      this.enemy7.body.allowGravity = false;
      this.enemy8.body.immovable = true;
      this.enemy8.body.collideWorldBounds = true;
      this.enemy8.body.allowGravity = false;
      this.enemy9.body.immovable = true;
      this.enemy9.body.collideWorldBounds = true;
      this.enemy9.body.allowGravity = false;
      this.enemy10.body.immovable = true;
      this.enemy10.body.collideWorldBounds = true;
      this.enemy10.body.allowGravity = false;
      this.enemy11.body.immovable = true;
      this.enemy11.body.collideWorldBounds = true;
      this.enemy11.body.allowGravity = false;
      this.enemy12.body.immovable = true;
      this.enemy12.body.collideWorldBounds = true;
      this.enemy12.body.allowGravity = false;
      this.enemy13.body.immovable = true;
      this.enemy13.body.collideWorldBounds = true;
      this.enemy13.body.allowGravity = false;
      this.enemy14.body.immovable = true;
      this.enemy14.body.collideWorldBounds = true;
      this.enemy14.body.allowGravity = false;
      this.enemy15.body.immovable = true;
      this.enemy15.body.collideWorldBounds = true;
      this.enemy15.body.allowGravity = false;
      this.enemy16.body.immovable = true;
      this.enemy16.body.collideWorldBounds = true;
      this.enemy16.body.allowGravity = false;


      this._rush.body.bounce.y = 0.1;
      this._rush.body.gravity.y = 550;
      this._rush.body.gravity.x = 0;
     
      this.groundLayer.resizeWorld(); //resize world and adjust to the screen+
      //Camara siguiendo al player
      this.game.camera.follow(this._rush);

      //tiempo cambio direccion enemigos
      this.game.time.events.loop(Phaser.Timer.SECOND*2, this.changeDirection, this);

      //ajustamos aqui el movimiento del enemigo para que pueda girar sin problemas
      //enemyGroup.setAll('x', 50, true, true, 1);
      this.enemy.body.velocity.x = 75;
      this.enemy2.body.velocity.x = 75;
      this.enemy3.body.velocity.x = 75;
      this.enemy4.body.velocity.x = 75;
      
      this.enemy6.body.velocity.x = 75;
      this.enemy7.body.velocity.x = 75;
      this.enemy8.body.velocity.x = 75;
      this.enemy9.body.velocity.x = 75;
      this.enemy10.body.velocity.x = 75;
      this.enemy11.body.velocity.x = 75;
      this.enemy12.body.velocity.x = 75;
      
      this.enemy14.body.velocity.y = 75;
      this.enemy15.body.velocity.x = 75;
      this.enemy16.body.velocity.x = 75;

      //Pause------------------
      var Esc = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
      Esc.onDown.add(this.unpause,this);

 },
  collectStars: function() {
    	coltan.kill();
    	//console.log("tooma")
    
    },

  update: function() {

  	 var collisionWithTilemap = this.game.physics.arcade.collide(this._rush, this.groundLayer);
     var collisionWithEnemies = this.game.physics.arcade.collide(this.enemy, this.groundLayer);
     var collisionWithColtan = this.game.physics.arcade.collide(this.coltan, this.groundLayer);
  	 var cursors = this.game.input.keyboard.createCursorKeys();
     var jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	 
	 this.game.camera.follow(this._rush);
     this.checkKey();


	   this._rush.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        this._rush.body.velocity.x = -200;
       // this._rush.scale.setTo(-0.75, 0.75);
        

    }
     if (cursors.right.isDown)
    {
        this._rush.body.velocity.x = 200;
        //this._rush.scale.setTo(0.75, 0.75);
       
    }
    
    if (jumpButton.isDown && this._rush.body.onFloor())
    {
        this._rush.body.velocity.y = -420; 
        jumpSound.play();
    }

    this.checkPlayerFell();
    this.enemyCollision();
    this.game.physics.arcade.overlap(this._rush, this.coltan, this.takeColtan, null, this);
    this.game.physics.arcade.overlap(this._rush, enemyGroup, this.enemyCollision, null, this);

    //this.game.physics.arcade.overlap(this.enemy, this.triggerR, this.changeDirection, null, this);
    //this.game.physics.arcade.overlap(this.enemy, this.triggerL, this.changeDirection, null, this);

    },

  onPlayerFell: function(){
        console.log("muerto");
        this.game.state.start('gameOver');

    },

  checkPlayerFell: function(){
        if(this.game.physics.arcade.collide(this._rush, this.death)){
            this.onPlayerFell();
        }
    },

    render: function() {
      this.game.debug.bodyInfo(this._rush, 16, 24);
    },

    enemyMovement: function(){
     // this.enemy.body.velocity.x = 50; 
      
      },

    changeDirection: function(){
      this.enemy.body.velocity.x *= -1;
      this.enemy2.body.velocity.x *= -1;
      this.enemy3.body.velocity.x *= -1;
      this.enemy4.body.velocity.x *= -1;
     
      this.enemy6.body.velocity.x *= -1;
      this.enemy7.body.velocity.x *= -1;
      this.enemy8.body.velocity.x *= -1;
      this.enemy9.body.velocity.x *= -1;
      this.enemy10.body.velocity.x *= -1;
      this.enemy11.body.velocity.x *= -1;
      this.enemy12.body.velocity.x *= -1;
     
      this.enemy14.body.velocity.y *= -1;
      this.enemy15.body.velocity.x *= -1;
      this.enemy16.body.velocity.x *= -1;
      this.enemy16.body.velocity.y *= -1.5;
      //console.log('sa girao');
    },

    enemyCollision: function() {
      if(this.game.physics.arcade.overlap(this._rush, enemyGroup)){
       // console.log("san tocao");
        this.game.state.start('gameOver');
      }
    },

    takeColtan: function(){
      this.coltan.destroy();
      //console.log('coltaaan');
      this.game.state.start('victory');

    },

  checkKey: function(){
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.ESC))
      this.pause();
  },

  pause: function(){
    this.menu_pause = new menu_pause(this.game);
    this.game.paused = true;
    music.pause();
  },

  unpause: function(event){
    if(this.game.paused){
      this.game.paused = false;
      this.menu_pause.destroy();

    }
  },

    shutdown: function() {

    this.cache.removeTilemap('tilemap');
    this.cache.removeImage('tiles');
    this.game.world.setBounds(0,0,800,600);
    //console.log("saa rotooo	")
    music.stop();
   
    
    }
  };


function menu_pause(game){

  //Título menu pause
  this.pText = game.add.text(game.camera.x + 400, game.camera.y + 100, "Pause");
  this.pText.anchor.set(0.5);
    
  //Boton continue
  this.button = game.add.button(game.camera.x + 400, game.camera.y + 300, 'button');
  this.button.inputEnabled = true;
  game.input.onDown.add(OnClick, this);
  this.button.anchor.set(0.5);
  this.txt = game.add.text(0, 0, "Continue");
  this.txt.anchor.set(0.5);
  this.button.addChild(this.txt);
   
  //Boton Return Menu
  this.button2 = game.add.button(game.camera.x + 400, game.camera.y + 400, 'button');
  this.button2.anchor.set(0.5);
  this.txt2 = game.add.text(0, 0, "Return Menu");
  this.txt2.anchor.set(0.5);
  this.button2.addChild(this.txt2);

  function OnClick(event){
      if(this.button.getBounds().contains(event.x,event.y)){
          game.paused = false;
          this.destroy();
          
          music.resume();
      }
      else if(this.button2.getBounds().contains(event.x,event.y)){
          game.paused = false;
          game.state.start('menu');
      }
  }
}
menu_pause.prototype.destroy = function(){
  this.button.kill();
  this.button2.kill();
  this.pText.destroy();
  this.txt.destroy();
  this.txt2.destroy();

}


module.exports = PlayScene;

