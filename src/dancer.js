// // Creates and returns a new dancer object that can step
// var MakeDancer = function(top, left, timeBetweenSteps) {

//   // use jQuery to create an HTML <span> tag
//   this.step();
//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

// };


var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');

  // coding in here


};

MakeDancer.prototype.step = function() {
  setTimeout(dancer.step, timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  dancer.$node.css(styleSettings);
};