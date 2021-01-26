import {Matchers} from '@pact-foundation/pact'
import request from "supertest"
import {mockedResponse} from '../mockedResponse/demo.people.response'
import {mockedLeaveResponse} from '../mockedResponse/demo.leave.response'

const {somethingLike: like, term, string} = Matchers;

describe('Consumer test', () => {
	
	const url = 'http://localhost:9000'; //same port with mocked provider
	var pactRequest = request(url);
	
	test('Consumer1 people test', (done) => {
		
		const peopleInteraction = {
			uponReceiving: 'people api',
			withRequest: {
				method: 'GET',
				path: '/api/people',
				headers: {
					'Content-Type': 'application/json'
				}
			},
			willRespondWith: {
				status: 200,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: {
					"id": "12809",
					"name": "Manjari Sharma",
					"gender": term({
						matcher: "Woman|Man",
						generate: "Woman",
					}),
				}
			}
		};
		provider.addInteraction(peopleInteraction);
		
		pactRequest
			.get('/api/people')
			.set('Content-Type', 'application/json')
			.expect(200).expect('Content-Type', /json/)
			.then(response => {
				expect(response.body).toMatchObject(mockedResponse);
				done();
			});
	});
	
	test.skip('Consumer1 leave test', (done) => {
		
		const leaveInteraction = {
			uponReceiving: 'leave api',
			withRequest: {
				method: 'GET',
				path: '/api/leave',
				headers: {
					'Content-Type': 'application/json'
				}
			},
			willRespondWith: {
				status: 200,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: mockedLeaveResponse
			}
		};
		provider.addInteraction(leaveInteraction);
		
		pactRequest
			.get('/api/leave')
			.set('Content-Type', 'application/json')
			.expect(200).expect('Content-Type', /json/)
			.then(response => {
				expect(response.body).toMatchObject(mockedLeaveResponse);
				done();
			});
	});
});