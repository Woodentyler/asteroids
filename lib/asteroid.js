const MovingObject = require("./moving_object");
const Util = require("./util");

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

function Asteroid (options = {}) {

  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  options.vel = Util.randomVec(DEFAULTS.speed);

  MovingObject.call(this, options); // gives us attributes
}

Util.inherits(Asteroid, MovingObject); // utilizes our util inherits object / gives us instance methods

module.exports = Asteroid;
