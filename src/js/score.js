(function() {
  'use strict';

  function Score() {}

  Score.prototype = {
    create: function () {
      this.add.text(90, 25, 'Score Board', {
        font: '42px yard',
        fill: '#c6546b'
      });

      this.name = this.game.state.states.game.name;
      this.lastScore = this.game.state.states.game.score;

      this.game.state.states.game.score = null;

      if (!localStorage.snowman) {
        localStorage.snowman = JSON.stringify({});
      }

      this.storage = JSON.parse(localStorage.snowman);

      var scores = this.storage.scores || [];

      if (this.lastScore) {
        scores.push({
          name: this.name,
          score: this.lastScore
        });
      }

      scores = scores.sort(function(a, b) {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });

      scores = scores.slice(0, 6);

      this.storage.scores = scores;
      localStorage.snowman = JSON.stringify(this.storage);

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

      this.add.image(this.game.width - 170, 60, 'newGameText');
      this.add.image(65, 60, 'backText');

      var self = this;
      scores.forEach(function(score, i) {
        self.add.text(70, 140 + (i * 50), i + 1 + ', ' + score.name, {
          font: '30px yard',
          fill: '#c6546b'
        });

        self.add.text(460, 140 + (i * 50), score.score, {
          font: '30px yard',
          fill: '#c6546b'
        }).anchor.set(1, 0);
      });
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
