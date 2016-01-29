'use strict';

var sleep = require('sleep');
var EventEmitter = require('events');

/**
 * ZOMBIES! CLI
 */

// var text = '\n\nHumanity is on the brink of extinction. All hope is lost for humanity!\nFortunately a group ' +
// 	'of consultants have barricaded themselves at TapQA headquarters\nand have developed an algorithm ' +
// 	'to save the world.\nThis group of consultants won\'t be able to save humanity by themselves.\n' +
// 	'They require the assistance of humanity\'s last combined army.\nUnfortunately it will take 15 ' +
// 	'days for this army to arrive to extract the consultants.\n';
	

// for (var i in text) {
// 	process.stdout.write(text[i]);
// 	if (text[i].match(/[.!]/)) {
// 		sleep.usleep(200000);
// 	} else {
// 		sleep.usleep(50000);
// 	}
// }

// sleep.sleep(2); //seconds
// var cliffhanger = 'Until extraction at least one consultant must survive the zombies...\n\n';
// for (var i in cliffhanger) {
// 	process.stdout.write(cliffhanger[i]);
// 	if (cliffhanger[i] === '.') {
// 		sleep.usleep(450000);
// 	} else {
// 		sleep.usleep(75000);
// 	}
// }

// sleep.sleep(1);

console.log(' ________  ________  _____ ______   ________  ___  _______   ________');
console.log('|\\_____  \\|\\   __  \\|\\   _ \\  _   \\|\\   __  \\|\\  \\|\\  ___ \\ |\\   ____\\');
console.log(' \\|___/  /\\ \\  \\|\\  \\ \\  \\\\\\__\\ \\  \\ \\  \\|\\ /\\ \\  \\ \\   __/|\\ \\  \\___|_');
console.log('     /  / /\\ \\  \\\\\\  \\ \\  \\\\|__| \\  \\ \\   __  \\ \\  \\ \\  \\_|/_\\ \\_____  \\');
console.log('    /  /_/__\\ \\  \\\\\\  \\ \\  \\    \\ \\  \\ \\  \\|\\  \\ \\  \\ \\  \\_|\\ \\|____|\\  \\');
console.log('   |\\________\\ \\_______\\ \\__\\    \\ \\__\\ \\_______\\ \\__\\ \\_______\\____\\_\\  \\');
console.log('    \\|_______|\\|_______|\\|__|     \\|__|\\|_______|\\|__|\\|_______|\\_________\\');
console.log('                                                               \\|_________|');
console.log('\n');
console.log('\n');

var Group = require(__dirname + '/lib/group');
var Zombies = require(__dirname + '/lib/zombies');

var game, group, isGameRunning, zombies, currentRound;

/**
 * Setup the game
 */
game = new EventEmitter();
group = new Group();
isGameRunning = true;
currentRound = 0;

/**
 * Set the game loop by letting the process run and listen for input
 */
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (input) {
	switch(input) {
		case 'help\n':
			game.emit('help');
			break;
		case 'check stats\n':
			group.emit('check stats');
			break;
		case 'ready\n':
			group.emit('zombies');
			break;
	}
});


game.on('help', function () {
	console.log()
});

game.on('game over', function () {
	console.log('game over!');
	process.exit(1);
});

game.on('win', function () {
	console.log('YOU WIN!');
	process.exit(0);
});

group.on('check stats', function () {
	console.log('Donuts: ', group.supply.donuts.length);
	console.log('Consutants alive: ', group.consultantsAlive());
});

group.on('zombies', function () {
	zombies = new Zombies();
	console.log('Oh shit, ' + zombies.length + ' zombies are heading towards you.');
	group.emit('battle', group.consultants, zombies);
});

group.on('battle', function (consultants, zombies) {
	sleep.usleep(500000);
	console.log('start battle');
	
	var cIndex = 0;
	var zIndex = 0;
	while (consultants[cIndex].is_alive && zIndex < zombies.length) {
		var consultant = consultants[cIndex];
		var zombie = zombies[zIndex];
		if (consultant.attack().had_success) {
			console.log('Zombie killed!');
			zombie.hit();
			zIndex++;
		} else {
			console.log('Consultant killed!');
			consultant.hit();
			cIndex++

			if (cIndex >= consultants.length) {
				game.emit('game over');
				break;
			}
		}
	}

	group.emit('feed');
});

group.on('feed', function () {
	console.log('\nwow, you made it this round. Let\'s rest a minute');
	group.feed();
	console.log('Let me know when you\'re ready to keep moving');
	console.log('You can check stats before we head out\n');
});
