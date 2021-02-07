import {Verifier} from '@pact-foundation/pact'

describe('Provider1 test - pact verification on all consumers', () => {
	
	const opts = {
		pactBrokerUrl: 'https://freebroker.pact.dius.com.au/',
		provider: 'provider1',
		providerBaseUrl: 'http://localhost:2000',
		pactBrokerToken: 'YRGtseFd2f1Um6uyMB_MFQ',
		publishVerificationResult: true,
		providerVersion: '1.0.0',
	};
	
	test('Validate the server expectations', (done) => {
		new Verifier(opts).verifyProvider().then(output => {
			console.log('Pact Verification Complete!');
			console.log(output);
			done();
		});
	});
});