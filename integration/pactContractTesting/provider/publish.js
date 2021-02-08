// ./pact/publish.js
let publisher = require('@pact-foundation/pact-node');
let path = require('path');

let opts = {
	providerBaseUrl: 'http://localhost:8080',
	pactFilesOrDirs: [path.resolve(process.cwd(), 'integration/pactContractTesting/consumer/pacts')],
	pactBroker: 'https://freebroker.pact.dius.com.au/',
	pactBrokerToken: process.env.PACT_BROKER_TOKEN,
	// pactBrokerUsername: process.env.PACT_USERNAME,
	// pactBrokerPassword: process.env.PACT_PASSWORD,
	consumerVersion: '2.0.0',
	publishVerificationResult: true,
};

publisher
	.publishPacts(opts)
	.then(() => console.log("Pacts successfully published"))
	.catch(e => {
		console.log("Pacts contract publishing failed", e);
	});

