exports.config = {
	tests: './ui/tests/*_test.js',
	output: './ui/output',
	helpers: {
		Puppeteer: {
			url: 'http://apphost:3000',
			show: true, //for debugging locally in non-docker env
			restart: false,
			waitForTimeout: 20000,
			waitForAction: 3000,
			waitForNavigation: ['domcontentloaded', 'networkidle0'],
			getPageTimeout: 30000,
			fullPageScreenshots: true,
			chrome: {
				args: ['--no-sandbox', '--disable-setuid-sandbox']
			},
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
