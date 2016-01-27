'use strict';

var sleep = require('sleep');

/**
 * ZOMBIES! CLI
 */

var text = '\n\nHumanity is on the brink of extinction. All hope is lost for humanity!\nFortunately a group ' +
	'of consultants have barricaded themselves at TapQA headquarters\nand have developed an algorithm ' +
	'to save the world.\nThis group of consultants won\'t be able to save humanity by themselves.\n' +
	'They require the assistance of humanity\'s last combined army.\nUnfortunately it will take 15 ' +
	'days for this army to arrive to extract the consultants.\n';
	

for (var i in text) {
	process.stdout.write(text[i]);
	if (text[i].match(/[.!]/)) {
		sleep.usleep(200000);
	} else {
		sleep.usleep(50000);
	}
}

sleep.sleep(2); //seconds
var cliffhanger = 'Until extraction at least one consultant must survive the zombies...\n\n';
for (var i in cliffhanger) {
	process.stdout.write(cliffhanger[i]);
	if (cliffhanger[i] === '.') {
		sleep.usleep(450000);
	} else {
		sleep.usleep(75000);
	}
}

sleep.sleep(1);

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

var group, isGameRunning;

/**
 * Setup the game
 */
group = new Group();
isGameRunning = true;

/**
 * Set the game loop by letting the process run and listen for input
 */
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (input) {
	console.log(input);
});

