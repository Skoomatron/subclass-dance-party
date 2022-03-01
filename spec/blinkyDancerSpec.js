describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 1;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0); // expects call count to be 0 but expects call step once per second?
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('bouncyDancer', function () {
  var bouncyDancer, clock;
  var timeBetweenSteps = 1;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
  });
  it('length should be 1', function() {
    expect(bouncyDancer.$node.length).to.be.equal(1);
  });
  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });
});

describe('blueDancer', function() {
  var blueDancer, dancer;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blueDancer = new makeBlueDancer(10, 20, 1);
    dancer = new makeDancer(21, 10, 4);
  });
  it('should not be the same as dancer', function() {
    expect(blueDancer).not.equal(makeDancer);
  });
  it('should have a jQuery $node object', function() {
    expect(blueDancer.$node).to.be.an.instanceof(jQuery);
  });
});



