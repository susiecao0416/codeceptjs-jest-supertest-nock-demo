"use strict";
import cheerio from 'cheerio';
import uuid from 'uuid';

import * as configurations from '../../../config/configurations'

describe('Internal APis Management', () => {
	const expectedResponse = 'We are sorry the system is under maintenance currently. All the changes will not be saved. Please try again later.';
	
	beforeAll((done) => {
		const expectedResponse = {
			"readMode": true
		};
		
		httpRequest
			.post(configurations.appConfig.ApiURLs.readOnlyMode)
			.set('Authorization', configurations.appConfig.systemEnv.allAccessToken)
			.set('Accept', 'application/json')
			.send({readMode: true})
			.expect(200)
			.then(response => {
				if (isLocal) {
					expect(response.body).toMatchObject(expectedResponse);
				}
				done();
			});
	});
	
	afterAll((done) => {
		const expectedResponse = {
			"readMode": false
		};
		
		httpRequest
			.post(configurations.appConfig.ApiURLs.readOnlyMode)
			.set('Authorization', configurations.appConfig.systemEnv.allAccessToken)
			.set('Accept', 'application/json')
			.send({readMode: false})
			.expect(200)
			.then(response => {
				if (isLocal) {
					expect(response.body).toMatchObject(expectedResponse);
				}
				done();
			});
	});
	
	test('Get /posts by id', async (done) => {
		
		var cookie = '';
		var x_csrf_token = '';
		const testRandomString = uuid.v4(); //generate random unique string
		
		//get cookie
		await httpRequest
			.post('/login')
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.send('user_id=12989') // consultant id of RM
			.then(response => {
				var cookies = response.header['set-cookie'].toString();
				cookie = cookies.substring(0, 48);
				//console.log(cookie);
			});
		//get x_csrf_token for post method;
		await httpRequest
			.get('/')
			.set('Cookie', cookie)
			.expect(200)
			.then(response => {
				const $ = cheerio.load(response.text);
				x_csrf_token = $('meta[name="csrf-token"]').attr('content');
				//console.log(x_csrf_token);
			});
		
		//Prepare testing data and expected response
		const testData = {
			"status": "fixed",
			"statusId": 1,
			"note": ""
		};
		//Send Request and check
		httpRequest
			.post(configurations.appConfig.ApiURLs.internalAPI)
			.set('Cookie', cookie)
			.set('x-csrf-token', x_csrf_token)
			.send(testData)
			.end(function (err, res) {
				expect(err.statusCode).toBe(500);
				expect(err.rawResponse).toEqual(expectedResponse);
				done();
			});
	});
});

