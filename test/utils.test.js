'use strict';

var utils = require('../lib/utils');

describe('Utils', function() {
	context('#getRandomNumber()', function () {
		it('should return a psuedo random number', function () {
			utils.getRandomNumber().should.be.any.instanceOf(Number);
		});
	});
});
