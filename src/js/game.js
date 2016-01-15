(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {

      this.paused = false;
      this.cameraYMin = 99999;
      this.platformYMin = 99999;
      this.name = this.name || '';

      var bg = this.add.image(0, 0, 'bg');
      bg.fixedToCamera = true;

      this.physics.startSystem( Phaser.Physics.ARCADE );
      this.platformsCreate();
      this.heroCreate();

      this.enemy = this.add.sprite(100, 100, 'ice');
      this.physics.enable(this.enemy, Phaser.Physics.ARCADE);
      this.enemy.body.immovable = true;

      var topImage = this.add.image(0, 0, 'top');
      topImage.fixedToCamera = true;

      this.score = 0;
      this.scoreText = this.add.text(120, 20, 'Score ', {
        font: '42px yard',
        fill: '#c6546b'
      });
      this.scoreText.fixedToCamera = true;

      var pauseBtn = this.add.image(21, 25, 'pauseBtn');
      pauseBtn.fixedToCamera = true;
      pauseBtn.inputEnabled = true;
      pauseBtn.input.useHandCursor = true;
      pauseBtn.events.onInputDown.add(this.pauseGame, this);

      this.cursor = this.input.keyboard.createCursorKeys();

      this.pausedText = this.add.text(170, 250, 'Paused', {
        font: '42px yard',
        fill: '#c6546b'
      });
      this.pausedText.fixedToCamera = true;
      this.pausedText.visible = false;

    },

    update: function () {
      if (this.paused) {
        return;
      }
      this.world.setBounds( 0, -this.hero.yChange, this.world.width, this.game.height + this.hero.yChange );

      this.cameraYMin = Math.min( this.cameraYMin, this.hero.y - this.game.height + 300 );
      this.camera.y = this.cameraYMin;

      this.score = parseInt(Math.abs(this.camera.y));
      this.scoreText.setText('Score: ' + this.score);

      this.physics.arcade.collide( this.hero, this.platforms );

      this.enemy.visible = this.score > 1000;

      if (this.score % 1000 < 20) {
        if (this.enemy.visible) {
          this.enemy.y = -this.score;
        }
      }

      if (this.enemy.visible) {
        this.physics.arcade.collide(this.hero, this.enemy, this.collideIce, null, this);
      }

      this.heroMove();

      this.enemy.body.velocity.x = 100;
      if (this.enemy.x > 550) {
        this.enemy.x = -50;
      }

      // for each plat form, find out which is the highest
      // if one goes below the camera view, then create a new one at a distance from the highest one
      // these are pooled so they are very performant
      this.platforms.forEachAlive( function( elem ) {
        this.platformYMin = Math.min( this.platformYMin, elem.y );
        if( elem.y > this.camera.y + this.game.height ) {
          elem.kill();
          this.platformsCreateOne( this.rnd.integerInRange( 0, this.world.width - 50 ), this.platformYMin - 100, this.rnd.integerInRange(40, 100) );
        }
      }, this );
    },

    collideIce: function() {
      this.endGame();
    },

    heroCreate: function () {
      this.hero = this.add.sprite( this.world.centerX, this.world.height - 200, 'snowman');
      this.hero.anchor.set( 0.5 );

      // track where the hero started and how much the distance has changed from that point
      this.hero.yOrig = this.hero.y;
      this.hero.yChange = 0;

      this.physics.arcade.enable( this.hero );
      // hero collision setup
      // disable all collisions except for down
      this.hero.body.setSize(40, 130, 0, 5);
      this.hero.body.gravity.y = 1000;
    },

    platformsCreate: function() {
      // platform basic setup
      this.platforms = this.add.group();
      this.platforms.enableBody = true;
      this.platforms.createMultiple( 13, 'pixel' );

      // create the base platform, with buffer on either side so that the hero doesn't fall through
      this.platformsCreateOne( -16, this.world.height - 16, this.world.width + 16 );
      // create a batch of platforms that start to move up the level
      for( var i = 0; i < 12; i++ ) {
        this.platformsCreateOne( this.rnd.integerInRange( 0, this.world.width - 50 ), Math.random() * 500, this.rnd.integerInRange(49, 100) );
      }
    },

    platformsCreateOne: function( x, y, width ) {
      // this is a helper function since writing all of this out can get verbose elsewhere
      var platform = this.platforms.getFirstDead();
      platform.reset( x, y );
      platform.body.checkCollision.down = false;
      platform.body.checkCollision.left = false;
      platform.body.checkCollision.right = false;
      platform.scale.x = width;
      platform.scale.y = 16;
      platform.body.immovable = true;
      return platform;
    },

    heroMove: function() {
      // handle the left and right movement of the hero
      if( this.cursor.left.isDown ) {
        this.hero.body.velocity.x = -300;
      } else if( this.cursor.right.isDown ) {
        this.hero.body.velocity.x = 300;
      } else {
        this.hero.body.velocity.x = 0;
      }

      // handle hero jumping
      if( this.hero.body.touching.down ) {
        this.hero.body.velocity.y = -650;
      }

      // wrap world coordinated so that you can warp from left to right and right to left
      this.world.wrap( this.hero, this.hero.width / 2, false );

      // track the maximum amount that the hero has travelled
      this.hero.yChange = Math.max( this.hero.yChange, Math.abs( this.hero.y - this.hero.yOrig ) );

      // if the hero falls below the camera view, gameover
      if( this.hero.y > this.cameraYMin + this.game.height && this.hero.alive ) {
        this.endGame();
      }
    },

    endGame: function() {
      if (!this.name) {
        this.name = prompt('Koniec Hry. Zadaj meno') || 'Bez mena';
      }
      this.state.start( 'score' );
    },

    shutdown: function() {
      // reset everything, or the world will be messed up
      this.world.setBounds( 0, 0, this.game.width, this.game.height );
      this.cursor = null;
      this.hero.destroy();
      this.hero = null;
      this.platforms.destroy();
      this.platforms = null;
    },

    pauseGame: function() {
      if (this.paused) {
        this.paused = false;
        this.physics.arcade.isPaused = false;
        this.pausedText.visible = false;
      } else {
        this.paused = true;
        this.physics.arcade.isPaused = true;
        this.pausedText.visible = true;
      }
    }
  };

  window['angry-snowman'] = window['angry-snowman'] || {};
  window['angry-snowman'].Game = Game;
}());
