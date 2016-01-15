(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
      this.load.image('snowmanPresents', 'assets/snowman-presents.png');
      this.load.image('newGameBtn', 'assets/newgame-btn.png');
      this.load.image('scoreBtn', 'assets/score-btn.png');
      this.load.image('back', 'assets/back.png');
      this.load.image('backText', 'assets/back-text.png');
      this.load.image('newGameText', 'assets/newgame-text.png');
      this.load.image('snowflake', 'assets/snowflake.png');
      this.load.image('snowman', 'assets/snowman.png');
      this.load.image('pixel', 'assets/pixel.png');
      this.load.image('top', 'assets/top.png');
      this.load.image('pauseBtn', 'assets/pause-btn.png');
      this.load.image('bg', 'assets/bg.png');
      this.load.bitmapFont('yard', 'assets/font.png', 'assets/font.fnt');
    },

    create: function () {
      // configure game
      this.game.input.maxPointers = 1;

      if (this.game.device.desktop) {
        this.game.scale.pageAlignHorizontally = true;
      } else {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.minWidth =  500;
        this.game.scale.minHeight = 500;
        this.game.scale.maxWidth = 500;
        this.game.scale.maxHeight = 500;
        this.game.scale.forceOrientation(true);
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.setScreenSize(true);
      }
      this.game.state.start('preloader');
    }
  };

  window['angry-snowman'] = window['angry-snowman'] || {};
  window['angry-snowman'].Boot = Boot;
}());

