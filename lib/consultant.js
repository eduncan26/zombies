'use strict';

var Person = require('./person'),
	ResourceFactory = require('./resource');

/**
 * Consultant object
 */
function Consultant() {
	Person.call(this);
	
	var weapon = new ResourceFactory().create('weapon');
	this.weapon = weapon.name;
	this.attack_success_probibility = weapon.attack_success_probibility;
}

// Inherit Person
Consultant.prototype = Object.create(Person.prototype);
Consultant.prototype.constructor = Consultant;

module.exports = Consultant;
