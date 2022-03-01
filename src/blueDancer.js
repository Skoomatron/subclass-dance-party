var makeBlueDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.$node.addClass('blue');
  this.clicker(event);

  // this.oldStep = this.step;
  // this.step = function() {
  //   this.oldStep();
  //   this.$node.toggle();
  // };
};

makeBlueDancer.prototype = Object.create(makeDancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;