'use strict';

var Zombie = require('../lib/zombie');
var zombie;

describe('Zombie object', function() {
	beforeEach(function () {
		zombie = new Zombie();
	});

	it('should be undead', function () {
		zombie.is_undead.should.be.true();
		zombie.is_alive.should.be.false();
	});

	it('should be dead instead of undead if hit', function () {
		zombie.hit();
		zombie.is_alive.should.be.false();
		zombie.is_undead.should.be.false();
	});
});
