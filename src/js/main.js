window.addEventListener('load', function () {
  'use strict';

  var ns = window['angry-snowman'];
  var game = new Phaser.Game(500, 500, Phaser.AUTO, 'angry-snowman-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);
  game.state.add('score', ns.Score);
  /* yo phaser:state new-state-files-put-here */
  game.state.start('boot');
}, false);
