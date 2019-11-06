exports.config = {
	tests: './ui/tests/*_test.js',
	output: './ui/output',
	helpers: {
		Nightmare: {
			url: 'http://computer-database.gatling.io',
			show: true,
			waitForTimeout: 20000,
			waitForAction: 2000,
			fullPageScreenshots: true,
			windowSize: '1200x800',
			webPreferences: {
				partition: 'nopersist'
			}
		},
		ResembleHelper: {
			require: 'codeceptjs-resemblehelper',
			screenshotFolder: './ui/output/',
			baseFolder: './ui/screenshots/base/',
			diffFolder: './ui/screenshots/diff/'
		}
	},
	include: {
		I: './ui/helpers/steps_file.js',
		homePage: './ui/pages/home.js'
	},
	mocha: {},
	bootstrap: false,
	plugins: {
		screenshotOnFail: {
			enabled: true
		},
		retryFailedStep: {
			enabled: true,
			retries: 10
		}
	},
	name: 'codeceptjs-jest-supertest-nock-demo'
}