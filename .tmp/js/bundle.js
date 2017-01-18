(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var music;

var GameOver = {
    create: function () {
        console.log("Game Over");
        music = this.game.add.audio('musicdeath');
         music.loopFull();
        music.play();
        this.game.stage.backgroundColor = '#FF1E1E';

        var button = this.game.add.button(400, 300, 
                                          'button', 
                                          this.actionOnClick, 
                                          this, 2, 1, 0);
        button.anchor.set(0.5);
        var goText = this.game.add.text(400, 75, "You are DEAD");
        goText.addColor("000000");
        var text = this.game.add.text(0, 0, "Reset Game");
        text.anchor.set(0.5);
        goText.anchor.set(0.5);
        button.addChild(text);
        
        var button2 = this.game.add.button(400, 200, 
                                          'button', 
                                          this.actionOnClick2, 
                                          this, 2, 1, 0);
        button2.anchor.set(0.5);
        var texto = this.game.add.text(0, 0, "Return Menu");
        texto.anchor.set(0.5);
        button2.addChild(texto);
    },
     actionOnClick2: function () {
        music.stop();
        this.game.state.start('menu');
        

    },
    
    
    actionOnClick: function () {
        music.stop();
        this.game.state.start('preloader');

    }

};

module.exports = GameOver;
},{}],2:[function(require,module,exports){
'use strict';


var play = require('./play_scene');
var gameOver = require('./gameover_scene');
var menu = require('./menu_scene');
var victory = require('./victory_scene');

var music;

var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'images/preloader_bar.png');
    this.game.load.spritesheet('button', 'images/buttons.png', 168, 70);
    this.game.load.image('fondo', 'images/fondoMenu.png');
    this.game.load.image('coltan', 'images/coltan.png');
    this.game.load.image('enemy', 'images/enemy.png');
    this.game.load.image('dragon', 'images/dragon.png');
    this.game.load.spritesheet('bat', 'images/bichovolador.png', 28 ,42.5);
    this.game.load.spritesheet('dragones', 'images/Dragon (2).png', 198.5, 93);

    //this.game.load.image('trigger', 'images/trigger.png');
    this.game.load.image('rata', 'images/rata.png');
    this.game.load.image('topo', 'images/topo.png');
    this.game.load.audio('musiclvl1', 'sounds/Castle.mp3')                                  
    this.game.load.audio('salto', 'sounds/jump_11.wav');
    this.game.load.audio('musicdeath', 'sounds/Determination.mp3');
    this.game.load.audio('musicvictory', 'sounds/Victory Fanfare.mp3');
    this.game.load.audio('musicmenu', 'sounds/Barier.mp3');



  },

  create: function () {
    //this.game.state.start('preloader');
     this.game.state.start('menu');


  }
};


var PreloaderScene = {
  preload: function () {
    this.loadingBar = this.game.add.sprite(100,300, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5); 
    this.game.load.setPreloadSprite(this.loadingBar);
    this.game.stage.backgroundColor = "#000000";
   
    this.game.load.onLoadComplete.add(this.loadComplete, this);
      
      

      this.game.load.tilemap('tilemap', 'images/lvl1remastered.json', null, Phaser.Tilemap.TILED_JSON);
      this.game.load.image('tiles', 'images/terrain_atlas.png');
      this.game.load.image('tiles2', 'images/terrain-Derivation_5.png');
      //this.game.load.image('personaje', 'images/personaje.png');
      this.game.load.spritesheet('personaje', 'images/orwellv2.png', 48,48);



      
      /***-- esto creo que no nos hace falta --**
      this.game.load.atlasJSONHash('rush_idle01','images/rush_spritesheet.png',
      'images/rush_spritesheet.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
      **--------------------------------------***/

      this.game.load.onLoadComplete.add(this.loadComplete, this);
      

	},
      

  loadStart: function () {
    
    console.log("Game Assets Loading ...");
   
    
  },
    

   loadComplete: function(){
    this.game.state.start('play');
    this.ready = true;
   },
    
    
    update: function(){
        this._loadingBar
    }
};


var wfconfig = {
 
    active: function() { 
        console.log("font loaded");
        init();
    },
 
    google: {
        families: ['Sniglet']
    }
 
};

window.onload = function () {
  WebFont.load(wfconfig);   

};

function init (){

  var game = new Phaser.Game(800, 600 , Phaser.AUTO, 'game');
  game.state.add('preloader', PreloaderScene);
  game.state.add('boot', BootScene);
  game.state.add('menu', menu);
  game.state.add('gameOver', gameOver);
  game.state.add('play', play);
  game.state.add('victory', victory);
 
  game.state.start('boot');
 
 
};

},{"./gameover_scene":1,"./menu_scene":3,"./play_scene":4,"./victory_scene":5}],3:[function(require,module,exports){
var music;
var MenuScene = {

    create: function () {
        music = this.game.add.audio('musicmenu');
        music.play();
        var fondo = this.game.add.sprite(this.game.world.centerX, 
                                        this.game.world.centerY, 
                                        'fondo');
        fondo.anchor.setTo(0.5, 0.5);
        var buttonStart = this.game.add.button(this.game.world.centerX, 
                                               this.game.world.centerY, 
                                               'button', 
                                               this.actionOnClick, 
                                               this, 2, 1, 0);
        buttonStart.anchor.set(0.5);
        var style = {font:"70px Impact", fill:"#a0a0a0", align: "center"};
        var TextTitle = this.game.add.text(230,30, "MINEBLOWN",style);
        var style1 = {font:"15px Courier New", fill:"#a0a0a0", align: "center"};
        var textnomb = this.game.add.text(10,560, "María García Raldúa", style1);
        textnomb.addColor("#ffffff",0);
        var textnomb = this.game.add.text(10,580, "Javier Landaburu Sánchez", style1);
        textnomb.addColor("#ffffff",0);
        var textStart = this.game.add.text(0, 0, "Play!");
        textStart.font = 'Sniglet';
        textStart.anchor.set(0.5);
        buttonStart.addChild(textStart);
    },
    
    actionOnClick: function(){
        this.game.state.start('preloader');
        music.stop();
    } 
};

module.exports = MenuScene;
},{}],4:[function(require,module,exports){
'use strict';

//Enumerados: PlayerState son los estado por los que pasa el player. Directions son las direcciones a las que se puede
//mover el player.
var PlayerState = {'JUMP':0, 'RUN':1, 'FALLING':2, 'STOP':3}
var Direction = {'LEFT':0, 'RIGHT':1, 'NONE':3}
var enemyGroup;
var music;
var jumpSound;
var controls;
var x = 1;
var d = 0.5;

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

      //Música y efectos
  	  jumpSound = this.game.add.audio('salto');
  	  music = this.game.add.audio('musiclvl1');
  	  music.loopFull();
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
      //Controles
      controls = {
        right: this.input.keyboard.addKey(Phaser.Keyboard.D),
        left: this.input.keyboard.addKey(Phaser.Keyboard.A),
        up: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
      };

      //Añadimos los sprites de las entidades
      this._rush = this.game.add.sprite(200, 200,'personaje');
      this._rush.frame = 0;

      this._rush.animations.add('right',[1,2,3], 10, true);
      this._rush.animations.add('left', [4,5,6], 10, true);
      this._rush.animations.add('idle', [0], 1, true);
      this._rush.animations.add('jump',[8],11,false);
      //this._rush = this.game.add.sprite(700, 3700, 'personaje');
      this.coltan = this.game.add.sprite(720, 7500, 'coltan');
      
      this._rush.scale.setTo(0.75, 0.75);
      this.coltan.scale.setTo(0.5, 0.5);
      this._rush.anchor.setTo(0.5, 0.5);


      enemyGroup = this.game.add.group();
      enemyGroup = this.game.add.physicsGroup();
      this.enemy = this.game.add.sprite(360, 400, 'bat', 0, enemyGroup);
      this.enemy2 = this.game.add.sprite(340, 770, 'bat', 0, enemyGroup);
      this.enemy3 = this.game.add.sprite(350, 1160, 'bat', 0, enemyGroup);
      this.enemy4 = this.game.add.sprite(200, 1725, 'rata', 0, enemyGroup);
      this.enemy5 = this.game.add.sprite(350, 970, 'topo', 0, enemyGroup);
      this.enemy6 = this.game.add.sprite(400, 2200, 'bat', 0, enemyGroup);
      this.enemy7 = this.game.add.sprite(240, 2800, 'rata', 0, enemyGroup);
      this.enemy8 = this.game.add.sprite(350, 3000, 'dragones', 0, enemyGroup);
      this.enemy9 = this.game.add.sprite(350, 3600, 'bat', 0, enemyGroup);
      this.enemy10 = this.game.add.sprite(260, 4200, 'bat', 0, enemyGroup);
      this.enemy11 = this.game.add.sprite(310, 4650, 'rata', 0, enemyGroup);
      this.enemy12 = this.game.add.sprite(300, 4900, 'bat', 0, enemyGroup);
      this.enemy13 = this.game.add.sprite(350, 5615, 'topo', 0, enemyGroup);
      this.enemy14 = this.game.add.sprite(425, 6000, 'dragones', 0, enemyGroup);
      this.enemy15 = this.game.add.sprite(300, 6700, 'bat', 0, enemyGroup);
      this.enemy16 = this.game.add.sprite(300, 7200, 'dragones', 0, enemyGroup);
      this.enemy.animations.add('fly',[0,1,2], 5, true);
      this.enemy2.animations.add('fly',[0,1,2], 5, true);
      this.enemy3.animations.add('fly',[0,1,2], 5, true);
      this.enemy6.animations.add('fly',[0,1,2], 5, true);
      this.enemy9.animations.add('fly',[0,1,2], 5, true);
      this.enemy10.animations.add('fly',[0,1,2], 5, true);
      this.enemy12.animations.add('fly',[0,1,2], 5, true);
      this.enemy15.animations.add('fly',[0,1,2], 5, true);
      this.enemy8.animations.add('fly',[2,3], 5, true);
      this.enemy14.animations.add('fly',[2,3], 5, true);
      this.enemy16.animations.add('fly',[2,3], 5, true);
           
      this.enemy.anchor.setTo(0.5, 0.5);
      this.enemy2.anchor.setTo(0.5, 0.5);
      this.enemy3.anchor.setTo(0.5, 0.5);
      this.enemy4.anchor.setTo(0.5, 0.5);
      this.enemy6.anchor.setTo(0.5, 0.5);
      this.enemy7.anchor.setTo(0.5, 0.5);
      this.enemy8.anchor.setTo(0.5, 0.5);
      this.enemy9.anchor.setTo(0.5, 0.5);
      this.enemy10.anchor.setTo(0.5, 0.5);
      this.enemy11.anchor.setTo(0.5, 0.5);
      this.enemy12.anchor.setTo(0.5, 0.5);
      this.enemy14.anchor.setTo(0.5, 0.5);
      this.enemy15.anchor.setTo(0.5, 0.5);
      this.enemy16.anchor.setTo(0.5, 0.5);

      this.enemy8.scale.setTo(0.65, 0.65);
      this.enemy14.scale.setTo(0.65, 0.65);
      this.enemy16.scale.setTo(0.65, 0.65);

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


      //this._rush.body.bounce.y = 0.1;
      this._rush.body.gravity.y = 550;
      this._rush.body.gravity.x = 0;
     
      this.groundLayer.resizeWorld(); //resize world and adjust to the screen+
      //Camara siguiendo al player
      this.game.camera.follow(this._rush);

      //tiempo cambio direccion enemigos
      this.game.time.events.loop(Phaser.Timer.SECOND*1.5, this.changeDirection, this);
      this.game.time.events.loop(Phaser.Timer.SECOND*1.5, this.changeFrame, this);


      //ajustamos aqui el movimiento del enemigo para que pueda girar sin problemas
      //enemyGroup.setAll('x', 50, true, true, 1);
      this.enemy.body.velocity.x = -75;


      this.enemy2.body.velocity.x = -75;
      this.enemy3.body.velocity.x = -75;
      this.enemy4.body.velocity.x = -75;
      
      this.enemy6.body.velocity.x = -75;
      this.enemy7.body.velocity.x = -75;
      this.enemy8.body.velocity.x = 75;
      this.enemy9.body.velocity.x = -75;
      this.enemy10.body.velocity.x = -75;
      this.enemy11.body.velocity.x = -75;
      this.enemy12.body.velocity.x = -75;
      
      this.enemy14.body.velocity.y = 75;
      this.enemy15.body.velocity.x = -75;
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

    this.playAnimation();

  	 var collisionWithTilemap = this.game.physics.arcade.collide(this._rush, this.groundLayer);
     var collisionWithEnemies = this.game.physics.arcade.collide(this.enemy, this.groundLayer);
     var collisionWithColtan = this.game.physics.arcade.collide(this.coltan, this.groundLayer);
  	 var cursors = this.game.input.keyboard.createCursorKeys();
     var jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	 
	 this.game.camera.follow(this._rush);
     this.checkKey();


	   this._rush.body.velocity.x = 0;
    
   if(!this._rush.body.onFloor()){
        this._rush.animations.play('jump');

   }
 
    if (controls.left.isDown)
    {
        this._rush.body.velocity.x -= this._speed;
        this._rush.animations.play('right');
        this._rush.scale.setTo(-0.75,0.75);

       // this._rush.scale.setTo(-0.75, 0.75);
    
    }
    if (controls.right.isDown)
    {
    
        this._rush.body.velocity.x += this._speed;
        this._rush.animations.play('right');
        this._rush.scale.setTo(0.75, 0.75);
       
    //}else {
     // this._rush.frame = 7;
   
    }
    
    if (controls.up.isDown && (this._rush.body.onFloor() || 
      this._rush.body.touching.down))
    {
        this._rush.body.velocity.y = -420; 
        jumpSound.play();
        this._rush.animations.stop('right');
        this._rush.animations.play('jump');

    }
    if(this._rush.body.velocity.x === 0.0 && this._rush.body.velocity.y === 0.0){
     
      this._rush.animations.stop('right');
      this._rush.animations.play('idle');
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
      //this.game.debug.bodyInfo(this._rush, 16, 24);
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
      
      //console.log('sa girao');
    },

    changeFrame: function() {
      
      x *= -1;
      d *= -1;
      this.enemy.scale.setTo(x,1);
      this.enemy2.scale.setTo(x,1);
      this.enemy3.scale.setTo(x,1);
      this.enemy4.scale.setTo(x,1);
      this.enemy6.scale.setTo(x,1);
      this.enemy7.scale.setTo(x,1);
      this.enemy8.scale.setTo(d,0.5);
      this.enemy9.scale.setTo(x,1);
      this.enemy10.scale.setTo(x,1);
      this.enemy11.scale.setTo(x,1);
      this.enemy12.scale.setTo(x,1);
      this.enemy15.scale.setTo(x,1);
      this.enemy16.scale.setTo(d,0.5);

    },

    playAnimation: function() {
      this.enemy.animations.play('fly');
      this.enemy2.animations.play('fly');
      this.enemy3.animations.play('fly');
      this.enemy6.animations.play('fly');
      this.enemy8.animations.play('fly');
      this.enemy9.animations.play('fly');
      this.enemy10.animations.play('fly');
      this.enemy12.animations.play('fly');
      this.enemy14.animations.play('fly');
      this.enemy15.animations.play('fly');
      this.enemy16.animations.play('fly');

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


},{}],5:[function(require,module,exports){
var music;

var VictoryScene = {
    create: function () {
        music = this.game.add.audio('musicvictory');
        music.loopFull();
        music.play();
        this.game.stage.backgroundColor = '#DCE40F';


        console.log("Victory");
        var button = this.game.add.button(400, 300,
            'button',this.actionOnClick, this, 2, 1, 0);

        button.anchor.set(0.5);

        var goText = this.game.add.text(400, 75, "Congrats! You've found the sacred metal!");
        goText.addColor("000000");

        var text = this.game.add.text(0, 0, "Restart");
        text.anchor.set(0.5);
        goText.anchor.set(0.5);
        button.addChild(text);
        
        
        var button2 = this.game.add.button(400, 200,
                                          'button',
                                          this.actionOnClick2, 
                                          this, 2, 1, 0);
        button2.anchor.set(0.5);
        var text2 = this.game.add.text(0, 0, "Return Menu");
        text2.anchor.set(0.5);
        button2.addChild(text2);
    },
    
    
    actionOnClick: function(){
        music.stop();
        this.game.state.start('preloader');
    },

   
    actionOnClick2: function(){
        music.stop();
        this.game.state.start('menu');
    }
};

module.exports = VictoryScene;
},{}]},{},[2]);
