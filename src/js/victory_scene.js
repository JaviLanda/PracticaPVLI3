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