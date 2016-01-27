'use strict';

/**
 * Dependencies
 */
var Consultant = require('./consultant'),
	Supply = require('./supply'),
	ResourceFactory = require('./resource');

/**
 * Group object constructor
 */
function Group() {
	var factory = new ResourceFactory();
	this.consultants = [];
	this.supply = new Supply();

	// Setup the consultants pool
	for (var i = 0; i < 10; i ++) {
		var weapon = factory.create('weapon');
		this.consultants.push(new Consultant(weapon));
	}

	this.consultants_alive = this.consultants.length;
}

/**
 * The consultants need to eat
 * @return {[type]} [description]
 */
Group.prototype.feed = function () {
	var feedingResult;
	for (var i = 0; i < this.consultants.length; i++) {
		// takes donut and returns boolean success status
		feedingResult = this.supply.takeDonut();
		
		if (!feedingResult) {
			this.consultants[i].is_alive = false;
			this.consultants[i].health = 0;
			this.consultants_alive--;
		}
	}

	return feedingResult;
};

module.exports = Group;