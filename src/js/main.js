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
