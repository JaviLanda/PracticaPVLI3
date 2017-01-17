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