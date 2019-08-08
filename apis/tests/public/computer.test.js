"use strict";

import * as configurations from '../../config/configurations'

describe('Get all computers', () => {
		test('Get all computers', function (done) {
			httpRequest
				.post(configurations.appConfig.apiURLs.addComputerAPI)
				// .set('Authorization', configurations.appConfig.allAccessToken)
				.set('Accept', 'text/html')
				.set('Content-Type', 'application/x-www-form-urlencoded')
				.send('name=testNowtestNow7')
				.expect(303)
				.expect(function (response) {
					expect(response.body).toContain('testNowtestNow7');
				})
				.end(done);
		})
	}
);
