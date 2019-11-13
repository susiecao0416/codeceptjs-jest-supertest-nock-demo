"use strict";

import * as configurations from '../../../config/configurations'
import {getBooksResponse} from '../../../data/responsedata/getBooks'

describe('Get books', () => {
		
		var requestParameters = '';
		var expectedResponse = '';
		
		test('Get /books by author', function (done) {
			requestParameters = '?author=Nettie Schumm';
			expectedResponse = getBooksResponse;
			
			httpRequest
				.get(configurations.appConfig.apiURLs.books)
				// .set('Authorization', configurations.appConfig.systemEnv.allAccessToken)
				.set('Accept', 'application/ld+json')
				.query('author=Nettie Schumm&page=1')
				.end(function (err, res) {
					expect(res.statusCode).toBe(200);
					console.log((res.body["hydra:member"])[0]);
					// expect(expectedResponse).toMatchObject((res.body["hydra:member"])[0]);
					done();
				});
		});
	}
);
