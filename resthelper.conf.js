exports.config = {
	tests: './integration/tests/codeceptjs-demo/*_test.js',
	output: './integration/output',
	helpers: {
		REST: {
			endpoint: "https://jsonplaceholder.typicode.com",
			onRequest: (request) => {
				request.headers.auth = '123';
			}
		}
	},
	mocha: {},
	bootstrap: false,
	teardown: null,
	hooks: [],
	plugins: {
		allure: {
			enabled: true,
			outputDir: './integration/output/allureresults'
		}
	},
	name:
		'codeceptjs-jest-supertest-nock-demo'
}