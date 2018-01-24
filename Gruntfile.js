/*
 * Generated on 2018-01-24
 * generator-veams v9.0.0-rc8
 * http://veams.org/
 *
 * Copyright (c) 2018
 * Licensed under the MIT license.
 */

'use strict';

/*
 * PERFORMANCE
 * 
 * 1. For performance reasons you should only matching one level down, if possible. 
 * 2. Try to keep your watch task clean. Do NOT watch everything (like icons).
 * 3. Add "spawn: false" to your watch task when you need to speed up your build.
 *
 */
const config = require('./veams-cli.json');

module.exports = function(grunt) {
	
	// load only used tasks and add fallbacks for those which cannot be find
	require('jit-grunt')(grunt, {
	});
	// measures the time each task takes
	require('time-grunt')(grunt);

	// Load grunt configurations automatically
	const configs = require('load-grunt-configs')(grunt, config);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	/*
	 *	SIMPLE TASKS
	 */

	/*
	 * ADVANCED TASKS
	 */
	grunt.registerTask('server', [
		'clean:dev',
		'browserify:dev',
		'concurrent:syncing',
		'sass:dev',
		'sass:docs',
		'chokidar'
	]);

	grunt.registerTask('pre-build', [
		'clean:dev',
	]);
	
	grunt.registerTask('build', [
		'browserify:dist',
		'uglify',
		'concurrent:syncing', 
		'sass:dev',
		'sass:docs',
		'postcss:dist',
		'cssmin',
		'concurrent:hintAndDocs'
	]);

	grunt.registerTask('default', [
		'server'
	]);
	
	// alias serve by grunt convention
	grunt.registerTask('serve', [
		'server'
	]);
	
	grunt.registerTask('dist', [
		'build',
		'copy:dist'
	]);
	
};
