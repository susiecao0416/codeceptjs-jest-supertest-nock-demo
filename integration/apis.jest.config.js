module.exports = {
	verbose: true,
	testRegex: "integration/tests/apis/.*\\.(js)$",
	setupFiles:
		[
			"<rootDir>/config/env.js"
		],
	setupFilesAfterEnv: [
		"<rootDir>/config/jest.setup.js"
	]
};