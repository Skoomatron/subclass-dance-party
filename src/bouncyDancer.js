var makeBouncyDancer = function() {
  makeDancer.call(this);
  this.$node = $('<span class="bouncy"></span>');
  // call appropriate methods per css animation?
// bouncing would need initial position and maybe something else?
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;