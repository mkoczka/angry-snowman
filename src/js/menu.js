(function() {
  'use strict';

  function Menu() {}

  Menu.prototype = {
    create: function () {
      this.game.stage.backgroundColor = '#d5e0f6';

      this.add.image(0, 0, 'bg');

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

      this.createSnowflakes();

    },

    update: function () {
      this.updateSnowflakes();
    },

    createSnowflakes: function () {
      this.snowFlakeDirection = 0;
      this.snowFlakeSpeed = 50;
      this.snowFlakes = [];
      for (var i = 0; i < 4; i++) {
        this.snowFlakes.push(this.add.image(Math.random() * 500, Math.random() * 500, 'snowflake'));
      }
    },

    updateSnowflakes: function () {
      this.snowFlakeDirection++;
      var self = this;
      this.snowFlakes.forEach(function(snowFlake) {
        snowFlake.position.x += self.snowFlakeDirection > self.snowFlakeSpeed ? 1 : -1;
        snowFlake.position.y++;
        if (snowFlake.position.y > 600) {
          snowFlake.position.y = 0 - Math.random() * 100;
          snowFlake.position.x = Math.random() * 500;
        }
      });

      if (this.snowFlakeDirection > this.snowFlakeSpeed * 2) {
        this.snowFlakeDirection = 0;
      }
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
