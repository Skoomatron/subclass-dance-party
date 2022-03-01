var makeBlueDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.$node = $('<span class="blue"></span>');
  // this.oldStep = this.step;
  // this.step = function() {
  //   this.oldStep();
  //   this.$node.toggle();
  // };
};

makeBlueDancer.prototype = Object.create(makeDancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;