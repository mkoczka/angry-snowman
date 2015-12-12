(function() {
  'use strict';

  function Menu() {}

  Menu.prototype = {
    create: function () {
      this.game.stage.backgroundColor = '#d5e0f6';
      var gameName = this.add.text(this.game.width / 2, this.game.height / 5, 'Angry Snowman', {
        font: '42px Arial',
        fill: '#c6546b'
      });

      gameName.anchor.set(0.5);

      var newGameBtn = this.add.text(this.game.width / 2, this.game.height / 2, 'Nova hra', {
        font: '20px Arial',
        fill: '#c6546b'
      });

      newGameBtn.anchor.set(0.5);
      newGameBtn.inputEnabled = true;
      newGameBtn.input.useHandCursor = true;
      newGameBtn.events.onInputDown.add(this.onNewGameClick, this);

      var scoreBtn = this.add.text(this.game.width / 1.5, this.game.height / 2, 'Tabulka', {
        font: '20px Arial',
        fill: '#c6546b'
      });

      scoreBtn.anchor.set(0.5);
      scoreBtn.inputEnabled = true;
      scoreBtn.input.useHandCursor = true;
      scoreBtn.events.onInputDown.add(this.onScoreClick, this);
    },

    update: function () {

    },

    onNewGameClick: function () {
      this.game.state.start('game');
    },

    onScoreClick: function() {
      this.game.state.start('score');
    }
  };

  window['angry-snowman'] = window['angry-snowman'] || {};
  window['angry-snowman'].Menu = Menu;
}());
