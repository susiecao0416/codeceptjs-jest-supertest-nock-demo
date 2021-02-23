exports.config = {
	tests: './ui/tests/*_test.js',
	output: './ui/output',
	helpers: {
		Playwright: {
			url: 'http://computer-database.gatling.io',
			show: false, //for debugging locally in non-docker env
			browser: 'chromium',
			restart: false,
			waitForTimeout: 20000,
			waitForAction: 3000,
			waitForNavigation: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
			// waitForSelector: ['visible'],
			// getPageTimeout: 300000,
			// fullPageScreenshots: true,
			// chrome: {
			// 	args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors']
			// },
			// firefox: {
			// 	args: ['--wait-for-browser', '--no-sandbox', '--disable-setuid-sandbox','--ignore-certificate-errors']
			// },
			// windowSize: '1200x800',
			// webPreferences: {
			// 	partition: 'nopersist'
			// }
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
	multiple: {
		parallel: {
			chunks: 2,
			browsers: [
				{
					browser: 'chrome',
					windowSize: '1200x800',
				},
				{
					browser: 'firefox',
					windowSize: '1200x800',
				}],
		},
	},
	name: 'acceptance-tests'
}
