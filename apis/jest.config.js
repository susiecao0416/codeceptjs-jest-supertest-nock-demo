module.exports = {
	verbose: true,
	testRegex: "apis/tests/public/.*\\.(js)$",
	collectCoverage: true,
	setupFiles:
		[
			"<rootDir>/config/env.js"
		]
};