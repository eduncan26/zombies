'use strict';

var ResourceFactory = require('./resource');

function Supply() {
	var factory = new ResourceFactory();
	this.donuts = [];

	// setup the donuts collection
	for (var i = 0; i < 100; i++) {
		this.donuts.push(factory.create('donut'));
	}
}

/**
 * Take a donut
 * @return {Boolean} If the taking was successful notify caller as boolean
 */
Supply.prototype.takeDonut = function () {
	if (this.donuts.length) {
		this.donuts.pop();
		return true;
	} else {
		return false;
	}
};

module.exports = Supply;
