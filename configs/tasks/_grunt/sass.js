const magicImporter = require('node-sass-magic-importer');

module.exports = {
	options: {
		outputStyle: 'nested',
		sourceMap: true,
		importer: magicImporter()
	},
	dev: {
		files: {
			'<%= paths.app %>/css/app.bundle.css': '<%= paths.src %>/app.scss'
		}
	},

	docs: {
		files: {
			'<%= paths.app %>/css/docs.bundle.css': '<%= paths.src %>/core/layouts/docs/docs.scss'
		}
	}
};