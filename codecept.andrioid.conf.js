exports.config = {
	tests: './uiMobile/tests/*_test.js',
	output: './uiMobile/output',
	helpers: {
		Appium: {
			platform: 'Android',
			desiredCapabilities: {
				appPackage: "com.android.calculator2",
				appActivity: ".Calculator",
				deviceName: "emulator-5554",
				platformVersion: "8.0"
			}
		},
		ResembleHelper: {
			require: 'codeceptjs-resemblehelper',
			screenshotFolder: './ui/output/',
			baseFolder: './uiMobile/screenshots/base/',
			diffFolder: './uiMobile/screenshots/diff/'
		}
	},
	include: {
		I: './uiMobile/helpers/steps_file.js',
		homePage: './uiMobile/pages/computerManagement.js'
	},
	mocha: {},
	bootstrap: false,
	teardown: null,
	hooks: [],
	plugins: {
		screenshotOnFail: {
			enabled: true
		},
		retryFailedStep: {
			enabled: true,
			retries: 10
		}
	},
	name:
		'codeceptjs-jest-supertest-nock-demo'
}