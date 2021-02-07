module.exports = {
	verbose: true,
    testRegex: "tests/demo.consumer.contract.test.js",
	setupFiles:
		[
			"<rootDir>/pact.setup.js",
			"<rootDir>/jest.setup.js"
		],
	setupFilesAfterEnv: [
		"<rootDir>/pactTestWrapper.js"
	]
};