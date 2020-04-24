exports.config = {
	tests: './ui-mobile/tests/*_test.js',
	output: './ui-mobile/output',
	helpers: {
		Appium: {
			platform: 'Android',
			desiredCapabilities: {
				appPackage: "com.android.calculator2",
				appActivity: ".Calculator",
				deviceName: "emulator-5554",
				platformVersion: "8.0"
				// app: "",
				// browserName: ""
			}
		},
		ResembleHelper: {
			require: 'codeceptjs-resemblehelper',
			screenshotFolder: './ui/output/',
			baseFolder: './ui-mobile/screenshots/base/',
			diffFolder: './ui-mobile/screenshots/diff/'
		}
	},
	include: {
		I: './ui-mobile/helpers/steps_file.js',
		homePage: './ui-mobile/pages/computerManagement.js'
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