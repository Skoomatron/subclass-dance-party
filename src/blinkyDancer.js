var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.oldStep = this.step;
  this.step = function() {
    this.oldStep();
    this.$node.toggle();
  };
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function() {
//   this.$node.toggle(this.timeBetweenSteps); //toggle is a jQuery method, toggle accepts a duration and/or an end point, with no parameters, toggles visibility
//   // makeDancer.prototype.step.call(this);
// };

//makeBlinkyDancer.$node = $('<span class="dancer"></span>');


// var blinky1 = new makeBlinkyDancer();
