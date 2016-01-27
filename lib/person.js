'use strict';

var utils = require('./utils');

function Person() {
	this.is_alive = true;
	this.attack_success_probibility = 25;
}

/**
 * @return {Object} 
 */
Person.prototype.attack = function () {
	return {
		had_success: this.attack_success_probibility > utils.getRandomNumber(),
		probability_of_hit: this.attack_success_probibility
	};
};

/**
 * Take the attacking hit
 * @return {void} - Flip the person from alive to dead
 */
Person.prototype.hit = function () {
	this.is_alive = false;
	this.health = 0;
};

module.exports = Person;
