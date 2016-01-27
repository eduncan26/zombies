'use strict';

var Group = require('../lib/group');
var ResourceFactory = require('../lib/resource');
var group;

describe('Group object', function() {
	beforeEach(function () {
		group = new Group();
	});

	it('should start with 10 consultants', function () {
		group.consultants.length.should.equal(10);
	});

	it('should have a supply', function () {
		group.supply.should.be.instanceOf(Object);
	});

	context('#feed()', function () {
		it('should remove a donut from the supply', function () {
			group.feed();
			group.supply.donuts.length.should.equal(90);
		});

		it('should kill consultants if there is nothing to feed them', function () {
			group.supply.donuts = [];
			for (var i = 0; i < 7; i++) {
				group.supply.donuts.push(new ResourceFactory().create('donut'));
			}
			
			group.feed();
			group.consultants_alive.should.equal(7);
		});
	});
});
