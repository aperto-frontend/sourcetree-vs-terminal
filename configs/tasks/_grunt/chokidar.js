module.exports = {
	ajax: {
		files: 'server/mocks/**/*.{json,html}',
		tasks: 'sync:ajax'
	},
	assets: {
		files: [
			'<%= paths.src %>/assets/**/*'
		],
		tasks: 'sync:assets'
	},
	scssDocs: {
		files: [
			'<%= paths.src %>/core/layouts/docs/**/*.scss'
		],
		tasks: [
			'sass:docs'
		]
	},
	scss: {
		files: [
			'<%= paths.src %>/app.tmp.scss',
			'<%= paths.src %>/core/components/**/*.scss',
			'<%= paths.src %>/core/styles/**/*.scss',
			'<%= paths.src %>/core/layouts/**/styles/**/*.scss',
			'<%= paths.src %>/shared/styles/**/*.scss',
			'<%= paths.src %>/shared/components/**/styles/**/*.scss',
			'<%= paths.src %>/shared/utilities/**/styles/**/*.scss'
		],
		tasks: [
			'sass:dev'
		]
	}
};