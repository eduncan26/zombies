'use strict';

/**
 * Dependencies
 */
var Consultant = require('./consultant'),
	Supply = require('./supply'),
	ResourceFactory = require('./resource'),
	EventEmitter = require('events'),
	util = require('util');

/**
 * Group object constructor
 */
function Group() {
	EventEmitter.call(this);
	var factory = new ResourceFactory();
	this.consultants = [];
	this.supply = new Supply();

	// Setup the consultants pool
	for (var i = 0; i < 10; i ++) {
		var weapon = factory.create('weapon');
		this.consultants.push(new Consultant(weapon));
	}
}

util.inherits(Group, EventEmitter);


/**
 * The consultants need to eat
 * @return {[type]} [description]
 */
Group.prototype.feed = function () {
	var feedingResult;
	for (var i = 0; i < this.consultants.length; i++) {
		if (this.consultants[i].is_alive) {
			// takes donut and returns boolean success status
			feedingResult = this.supply.takeDonut();
			
			if (!feedingResult) {
				this.consultants[i].is_alive = false;
				this.consultants[i].health = 0;
			}
		} else {
			continue;
		}
	}

	return feedingResult;
};

Group.prototype.consultantsAlive = function () {
	var ct = 0;
	for (var i = 0; i < this.consultants.length; i++) {
		if (this.consultants[i].is_alive) ct++;
	}
	return ct;
}

module.exports = Group;