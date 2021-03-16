module.exports = {
	verbose: true,
	testRegex: "integration/tests/apis/.*\\.(js)$",
	setupFiles:
		[
			"<rootDir>/config/env.js"
		],
	setupFilesAfterEnv: [
		"<rootDir>/config/jest.setup.js"
	],
	runner: "groups",
	collectCoverageFrom: [
		"<rootDir>/pactContractTesting/provider/src/index.js"
	],
	reporters: [
		"default",
		["<rootDir>/node_modules/jest-html-reporter", {
			"pageTitle": "API Tests Report",
			"outputPath": "./integration/output/api-test-report.html",
			"includeFailureMsg": true,
			"includeSuiteFailure": true,
			"includeConsoleLog": true
		}]
	]
};