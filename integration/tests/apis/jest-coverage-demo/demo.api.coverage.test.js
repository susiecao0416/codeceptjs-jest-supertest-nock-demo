import * as apiRequest from '../../../src/index'

//Not sure why the coverage report is not accuarate cause the branch line still 50%
describe('Demo - Jest API Coverage', () => {
	
	//Failed to collect api coverage report using Jest
	test('Check API with collected coverage', (done) => {
		
		const expectedResponse = {
			test: 'NO',
			count: 1000
		};
		
		httpRequest
			.get('/api/providerdemo?validDate=2011-03-01')
			.set('Accept', 'application/json')
			.expect(200)
			.then(response => {
				expect(response.body).toMatchObject(expectedResponse);
				done();
			});
	});
	
	test('Check API returning null reponse with collected coverage', (done) => {
		const expectedResponse = {
			"error": "validDate is required"
		};
		
		httpRequest
			.get('/api/providerdemo?validDate=')
			.set('Accept', 'application/json')
			.expect(400)
			.then(response => {
				expect(response.body).toMatchObject(expectedResponse);
				done();
			});
	});
});