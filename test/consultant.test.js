'use strict';

var Consultant = require('../lib/consultant');

var consultant;

describe('Consultant object', function () {
	beforeEach(function () {
		consultant = new Consultant();
	});

	it('should construct as a living consultant', function () {
		consultant.is_alive.should.be.true();
	});

	it('should have a higher probibility of killing than a regular person', function () {
		if (consultant.weapon === 'grapefruit') {
			consultant.attack_success_probibility.should.equal(25)
		} else {
			consultant.attack_success_probibility.should.be.greaterThan(25);
		}
	});
});
