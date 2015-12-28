(function() {
  'use strict';

  function Menu() {}

  Menu.prototype = {
    create: function () {
      this.game.stage.backgroundColor = '#d5e0f6';

      this.add.image(0, 500 - 352, 'snowmanPresents');

      this.add.text(60, 50, 'Angry Snowman', {
        font: '42px yard',
        fill: '#c6546b'
      });

      var newGameBtn = this.add.image(180, 130, 'newGameBtn');

      newGameBtn.inputEnabled = true;
      newGameBtn.input.useHandCursor = true;
      newGameBtn.events.onInputDown.add(this.onNewGameClick, this);

      var scoreBtn = this.add.image(340, 130, 'scoreBtn');

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
