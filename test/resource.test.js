'use strict';

var Resource = require('../lib/resource');
var resource;

describe('Resource factory', function() {
	beforeEach(function () {
		resource = new Resource();
	});

	it('should create a donut', function () {
		resource.create('donut').should.have.property('has_sprinkles');
	});

	it('should create a weapon', function () {
		var weapon = resource.create('weapon');
		weapon.should.have.property('name');
		weapon.should.have.property('attack_success_probibility');
	});
});
