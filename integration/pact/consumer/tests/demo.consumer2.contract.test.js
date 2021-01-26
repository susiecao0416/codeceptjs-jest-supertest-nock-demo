import {Matchers} from '@pact-foundation/pact'
import request from "supertest"
import {mockedResponse} from '../demo.people.response'
import {mockedLeaveResponse} from '../demo.leave.response'

const {somethingLike: like, term, string} = Matchers;

describe('Consumer2 test', () => {
	
	const url = 'http://localhost:9000'; //same port with mocked provider
	var pactRequest = request(url);
	
	const submissionDate = new Date().toISOString();
	const date = '2013-08-16T15:31:20+10:00';
	const expectedBody = {
		test: 'NO',
		date: date,
		count: 1000
	};
	
	test('Consumer1 test to get api/providerdemo', (done) => {
		
		const peopleInteraction = {
			uponReceiving: 'demo api',
			withRequest: {
				method: 'GET',
				path: '/api/providerdemo',
				query: {
					validDate: submissionDate
				}
			},
			willRespondWith: {
				status: 200,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: {
					test: string('NO'),
					date: term({generate: date, matcher: '\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\+\\d{2}:\\d{2}'}),
					count: like(1000)
				}
			}
		};
		provider.addInteraction(peopleInteraction);
		
		pactRequest
			.get('/api/providerdemo')
			.query({validDate: submissionDate})
			.expect(200).expect('Content-Type', /json/)
			.then(response => {
				expect(response.body).toMatchObject(expectedBody);
				done();
			});
	});
});