(function() {
  'use strict';

  function Score() {}

  Score.prototype = {
    create: function () {
      this.add.text(90, 25, 'Score Board', {
        font: '42px yard',
        fill: '#c6546b'
      });

      var backBtn = this.add.image(50, 50, 'back');
      backBtn.angle += 180;

      backBtn.anchor.set(0.5);
      backBtn.inputEnabled = true;
      backBtn.input.useHandCursor = true;
      backBtn.events.onInputDown.add(this.onBackBtnClick, this);

      var newGameBtn = this.add.image(this.game.width - 50, 50, 'back');

      newGameBtn.anchor.set(0.5);
      newGameBtn.inputEnabled = true;
      newGameBtn.input.useHandCursor = true;
      newGameBtn.events.onInputDown.add(this.onNewGameClick, this);

      var graphics = this.add.graphics(20, 100);
      graphics.lineStyle(3, 0x8d9dbe, 1);
      graphics.beginFill(0xFFFFFF);
      graphics.drawRoundedRect(0, 0, 460, 380, 20);
      graphics.endFill();

      var newGameText = this.add.image(this.game.width - 170, 60, 'newGameText');
      var backText = this.add.image(65, 60, 'backText');
    },

    update: function () {

    },

    onBackBtnClick: function () {
      this.game.state.start('menu');
    },

    onNewGameClick: function() {
      this.game.state.start('game');
    }
  };

  window['angry-snowman'] = window['angry-snowman'] || {};
  window['angry-snowman'].Score = Score;
}());
