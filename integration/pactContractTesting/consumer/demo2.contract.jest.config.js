module.exports = {
	verbose: true,
	testRegex: "tests/demo2.consumer.contract.test.js",
	setupFiles:
		[
			"<rootDir>/pact2.setup.js",
			"<rootDir>/jest.setup.js"
		],
	setupFilesAfterEnv: [
		"<rootDir>/pactTestWrapper.js"
	]
};