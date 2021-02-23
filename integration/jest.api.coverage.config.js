module.exports = {
	verbose: true,
	testRegex: "tests/apis/jest-coverage-demo/demo.api.coverage.test.js",
	setupFiles:
		[
			"<rootDir>/config/env.js"
		],
	setupFilesAfterEnv: [
		"<rootDir>/config/jest.setup.js"
	],
	runner: "groups",
	collectCoverageFrom: [
		"<rootDir>/src/index.js"
	],
	reporters: [
		"default",
		["<rootDir>/node_modules/jest-html-reporter", {
			"pageTitle": "API Tests Report",
			"outputPath": "<rootDir>/output/api-test-report.html",
			"includeFailureMsg": true,
			"includeSuiteFailure": true,
			"includeConsoleLog": true
		}]
	]
};