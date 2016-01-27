'use strict';

/**
 * Resource factory
 */
function Resource() {
	this.create = function (name) {
		var resource;

		switch(name.toLowerCase()) {
			case 'donut':
				return new Donut();
				break;
			case 'weapon':
				return new Weapon();
				break;
		}

		return resource;
	};
}

function Donut() {
	this.has_sprinkles = !!Math.round(Math.random());
}

function Weapon(weapon) {
	return generateWeapon();
}

function generateWeapon() {
	var WEAPONS = [
		{ name: 'handgun', attack_success_probibility: 65 },
		{ name: 'shotgun', attack_success_probibility: 45 },
		{ name: 'rifle', attack_success_probibility: 55 },
		{ name: 'axe', attack_success_probibility: 85 },
		{ name: 'knife', attack_success_probibility: 85 },
		{ name: 'bat', attack_success_probibility: 60 },
		{ name: 'machete', attack_success_probibility: 75 },
		{ name: 'steel pipe', attack_success_probibility: 40 },
		{ name: 'grapefruit', attack_success_probibility: 25 },
		{ name: 'golden gun', attack_success_probibility: 90 }
	];

	return WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
}

module.exports = Resource;
