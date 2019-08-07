"use strict";

import * as configurations from '../../config/configurations'

describe('Get all computers', () => {
		test('Get all computers', function (done) {
			httpRequest
				.post(configurations.appConfig.apiURLs.addComputerAPI)
				// .set('Authorization', configurations.appConfig.allAccessToken)
				.set('Accept', 'text/html')
				.set('Content-Type', 'application/x-www-form-urlencoded')
				.send('name=testNowtestNow5')
				// .expect([200,303])
				.expect(function (response) {
					expect(response.body).to.contain('testNowtestNow5');
				})
				.end(done);
		})
	}
);
