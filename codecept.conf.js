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
			},
		},
		REST: {
			endpoint: 'http://computer-database.gatling.io',
			onRequest: (request) => {
				request.headers.auth = '123';
			}
		}
		// ResembleHelper: {
		// 	require: 'codeceptjs-resemblehelper',
		// 	screenshotFolder: './ui/output/',
		// 	baseFolder: './ui/screenshots/base/',
		// 	diffFolder: './ui/screenshots/diff/'
		// }
	},
	include: {
		I: './ui/helpers/steps_file.js',
		homePage: './ui/pages/computerManagement.js'
	},
	mocha: {},
	bootstrap: false,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './ui/features/*.feature',
		steps: ['./ui/step_definitions/computer.steps.js']
	},
	plugins: {
		screenshotOnFail: {
			enabled: true
		},
		retryFailedStep: {
			enabled: true,
			retries: 10
		},
		allure: {
			enabled: true,
			outputDir: './ui/output/allure-report'
		}
	},
	name:
		'codeceptjs-jest-supertest-nock-demo'
}