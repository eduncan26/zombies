'use strict';

var Person = require('./person');

function Zombie() {
	Person.call(this);

	this.is_alive = false;
	this.is_undead = true;
	this.attack_success_probibility = 85;
}

Zombie.prototype = Object.create(Person.prototype);
Zombie.prototype.constructor = Zombie;

/**
 * Take a hit
 * @override Person.prototype.hit
 * @return {void}
 */
Zombie.prototype.hit = function () {
	this.is_undead = false;
};

module.exports = Zombie;
