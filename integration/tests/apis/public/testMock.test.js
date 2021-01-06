"use strict";

import * as configurations from '../../../config/configurations'
import {getPostsResponse} from '../../../data/responsedata/getPosts'
import {postsRequestBody} from '../../../data/testingdata/postsRequestbody'

/*
* Below demo is based on: https://jsonplaceholder.typicode.com
* */
describe('Mocking Testing', () => {
	
	test('Mock Testing for people', function (done) {
		
		const expectedResponse = {
			"employeeId": "10004",
			"primaryEmail": "test@thoughtworks.com"
		};
		
		httpRequest
			.get('people/101')
			.set('Accept', 'application/json')
			.end(function (err, res) {
				expect(res.statusCode).toBe(200);
				expect(res.body).toMatchObject(expectedResponse);
				done();
			});
	});
});
