'use strict';

var Zombies = require('../lib/zombies');
var zombies;

describe('Zombies collection', function () {
	beforeEach(function () {
		zombies = new Zombies();
	});

	it('should be a collection of zombies', function () {
		zombies.length.should.be.greaterThan(4);
		zombies.length.should.be.lessThan(26);
	});
});
