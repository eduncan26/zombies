var gulp = require('gulp'),
	mocha = require('gulp-mocha');

var tests = ['test/**/*.js'],
	src = ['lib/**/*.js', 'zombies.js'];

gulp.task('default', ['test']);

gulp.task('test', function () {
	return gulp.src(['test/**/*.js'], { read: false })
		.pipe(mocha({
			reporter: 'spec',
			globals: {
				should: require('should')
			}
		}));
});

gulp.task('tdd', function () {
	return gulp.watch([tests, src], ['test']);
});
