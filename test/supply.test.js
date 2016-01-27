'use strict';

var Supply = require('../lib/supply');
var supply;

describe('Supply object', function() {
	beforeEach(function () {
		supply = new Supply();
	});

	it('should have 100 donuts', function () {
		supply.donuts.length.should.equal(100);
	});

	context('#takeDonut()', function () {
		it('should remove 1 donut at a time', function () {
			supply.takeDonut().should.be.true();
			supply.donuts.length.should.equal(99);
		});

		it('should not take a donut if there is not one to take', function () {
			supply.donuts = [];
			supply.takeDonut().should.be.false();
			supply.donuts.length.should.equal(0);
		});
	});
});
