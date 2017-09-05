const GameView = function (game, ctx) {
  this.game = game;
  this.ctx = ctx;
};

GameView.prototype.start = function () {
  console.log(this);
  setInterval(this.game.draw.bind(this.game, this.ctx), 20);
  setInterval(this.game.moveObjects.bind(this.game), 20);
};

module.exports = GameView;
