const Asteroid = require('./asteroid.js');

function Game () {
  this.asteroids = [];
  this.addAsteroids();
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

Game.prototype.randomPosition = function() {
  let x = Game.DIM_X * Math.random();
  let y = Game.DIM_Y * Math.random();
  return [x,y];
};

Game.prototype.addAsteroids = function (){
  for (let i=0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid ({pos: this.randomPosition()}));
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);
  this.asteroids.forEach( function(el){
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(function(el){
    el.move();
  });
};

module.exports = Game;
