var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(Math.random() * window.innerHeight, Math.random() * window.innerWidth); // Math.random() here?
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps / 2);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.clicker = function(event) {
  $('.lineup').click(function (event) {
    console.log('popped twice');
    // find all dancers
    // for each dancer
    // set style="left:0px"
  });
};

console.log(window);






