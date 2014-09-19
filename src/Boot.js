var Game = {
    width  : 320,
    height : 480,
    orientated: false,
};

Game.Boot = function(g) {};

Game.Boot.prototype = {
    preload: function(g) {},
    init: function(g) {
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth  = Game.width;
            this.scale.minHeight = Game.height;
            this.scale.maxWidth  = 1024;
            this.scale.maxHeight = 1536;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically   = true;
            this.scale.setScreenSize(true);
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth  = Game.width;
            this.scale.minHeight = Game.height;
            this.scale.maxWidth  = 1024;
            this.scale.maxHeight = 1536;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically   = true;
            this.scale.forceOrientation(true,false);
            this.scale.hasResized.add(this.gameResized,this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation,this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation,this);
            this.scale.setScreenSize(true);
        }
    },
    gameResized: function(width,height) {
        // placeholder
    },
    enterIncorrectOrientation: function() {
        Game.orientated = false;
        document.getElementById('orientation').style.display = 'block';
    },
    leaveIncorrectOrientation: function() {
        Game.orientated = true;
        document.getElementById('orientation').style.display = 'none';
    },
    create: function(g) {
        g.state.start('Preload');
    },
    update: function() {},
};
