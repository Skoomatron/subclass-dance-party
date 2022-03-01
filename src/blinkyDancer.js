var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.oldStep = this.step;
  this.step = function() {
    this.oldStep();
    this.$node.toggle();
  };
  this.clicker(event);
  this.setPosition(top, left);

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


