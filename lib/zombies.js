'use strict';

var Zombie = require('./zombie');

function Zombies() {
	var collection = [];
	var count = Math.floor(Math.random() * 20) + 5 // between 5 and 25
	
	for (var i = 0; i < count; i++) {
		collection.push(new Zombie());
	}

	return collection;
}

module.exports = Zombies;
