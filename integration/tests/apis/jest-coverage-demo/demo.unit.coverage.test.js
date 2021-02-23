import sum from '../../../src/unitsrc'

describe('Demo - Jest Unit Coverage', () => {
	
	//The server api is from PactContractTesting -> Provider -> src folder. Please start this server
	test('Check Unit coverage', (done) => {
		const actualResult = sum(1, 3);
		expect(actualResult).toBe(4);
		done();
	});
});