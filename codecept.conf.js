exports.config = {
	tests: './ui/tests/*_test.js',
	output: './ui/output',
	helpers: {
		TestCafe: {
			url: 'http://computer-database.gatling.io',
			show: true, //for debugging locally in non-docker env
			browser: 'firefox',
			restart: false,
			waitForTimeout: 20000,
			waitForAction: 3000,
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
		homePage: './ui/pages/computerManagement.js'
	},
	mocha: {},
	bootstrap: false,
	teardown: null,
	hooks: [],
	gherkin: {},
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
			outputDir: './ui/output/allure-report',
			enableScreenshotDiffPlugin: true
		}
	},
	name: 'acceptance-tests'
}
