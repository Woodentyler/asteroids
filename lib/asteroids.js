const Game = require('./game');
const GameView = require('./game_view');


document.addEventListener('DOMContentLoaded', function() {
  const cnvs = document.getElementById('game-canvas');
  cnvs.width = Game.DIM_X;
  cnvs.height = Game.DIM_Y;

  let ctx = cnvs.getContext('2d');

  const game = new Game();

  new GameView(game,ctx).start();

});
