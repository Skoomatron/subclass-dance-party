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
  describe('bouncyDancer', function () {
    var bouncyDancer;
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      bouncyDancer = new makeBouncyDancer(10, 20, 1);
      console.log(bouncyDancer);
    });

    it('should have a bouncy class on bouncy dancers', function() {
      expect(bouncyDancer.$node.getElementById('bouncy')).to.be.true;
    });
  });


  describe('blueDancer', function() {
    var blueDancer;

    beforeEach(function() {
      clock = sinon.useFakeTimers();
      blueDancer = new makeBlueDancer(10, 20, 1);
    });

    it('should have a jQuery $node object', function() {
      expect(blueDancer.$node).to.be.an.instanceof(jQuery);

    });
  });


});

