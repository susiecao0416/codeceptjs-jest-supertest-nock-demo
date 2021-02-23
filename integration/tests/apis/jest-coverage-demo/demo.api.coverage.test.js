describe('Demo - Jest API Coverage', () => {
	
	//Failed to collect api coverage report using Jest
	test('Check API with collected coverage', (done) => {
		
		const expectedResponse = {
			test: 'NO',
			count: 1000
		};
		
		httpRequest.get('/api/providerdemo?validDate=2011-03-01')
			.set('Accept', 'application/json')
			.expect(200)
			.then(response => {
				expect(response.body).toMatchObject(expectedResponse);
				done();
			});
	});
	
	test.skip('Check API returning null reponse with collected coverage', (done) => {
		const expectedResponse = {
			"error": "validDate is required"
		};
		
		httpRequest.get('/api/providerdemo?validDate=')
			.set('Accept', 'application/json')
			.expect(400)
			.then(response => {
				expect(response.body).toMatchObject(expectedResponse);
				done();
			});
	});
});