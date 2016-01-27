'use strict';

var Person = require('../lib/person');
var person;

describe('Person object', function () {
	beforeEach(function () {
		person = new Person();
	});

	it('should be able to attack', function () {
		person.attack().should.be.instanceOf(Object);
	});

	it('should die if hit', function () {
		person.hit();
		person.is_alive.should.be.false();
	});
});
