(function() {
  'use strict';

  function Score() {}

  Score.prototype = {
    create: function () {
      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {

    },

    onInputDown: function () {
      this.game.state.start('menu');
    }
  };

  window['angry-snowman'] = window['angry-snowman'] || {};
  window['angry-snowman'].Score = Score;
}());
