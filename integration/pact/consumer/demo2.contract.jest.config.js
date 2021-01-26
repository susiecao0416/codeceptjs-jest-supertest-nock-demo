module.exports = {
	verbose: true,
	testRegex: "tests/demo.consumer2.contract.test.js",
	setupFiles:
		[
			"<rootDir>/pact2.setup.js",
			"<rootDir>/jest.setup.js"
		],
	setupFilesAfterEnv: [
		"<rootDir>/pactTestWrapper.js"
	]
};