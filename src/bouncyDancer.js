var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.$node.addClass('bouncy');
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;