"use strict";

import * as configurations from '../../../config/configurations'
import {getPostsResponse} from '../../../data/responsedata/getPosts'
import {postsRequestBody} from '../../../data/testingdata/postsRequestbody'
import * as reportResponses from '../../../data/responsedata/exportReportResponse'
import fs from "fs";

/*
* Below demo is based on: https://jsonplaceholder.typicode.com
* */

/***
 * @group local
 */
describe('Demo Tests', () => {
		
		var cookie = '';
		
		beforeAll((done) => {
			httpRequest
				.post('/login')
				.set('Content-Type', 'application/x-www-form-urlencoded')
				.send('user_id=xxx')
				.end(function (err, res) {
					if (err) throw err;
					
					var cookies = res.header['set-cookie'].toString();
					cookie = cookies.substring(0, 48);
					done();
				});
		});
		
		//the picture is encoded with 64 format
		//https://www.base64encode.net/base64-image-encoder
		test('Upload pictures', function (done) {
			
			var postData = 'data:image/png;base64,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';
			var expectedResponse = {
				"data": "ok"
			};
			
			httpRequest
				.post('xxx')
				.set('Content-Type', 'application/x-www-form-urlencoded')
				.send({image: postData})
				.expect(200)
				.then(response => {
					expect(response.body).toMatchObject(expectedResponse);
					done();
				});
		});
		
		//Upload file with form data
		test('Upload file with form data in the post body', function (done) {
			const testingURL = '/consultant_resumes';
			var fileName = 'xxx.pdf';
			var filePath = __dirname + '/../../../data/testingdata/' + fileName;
			var expectedResponse = {
				"resumeName": fileName
			};
			
			httpRequest
				.post(testingURL)
				.set('Cookie', cookie)
				.set('Content-Type', 'multipart/form-data')
				.field('employee_id', '11323') //form data filed
				.attach('uploaded_file', filePath) //file
				.expect(200)
				.then(response => {
					expect(response.body).toMatchObject(expectedResponse);
					done();
				});
		});
		
		//Export report in excel format
		//Copy the respsonse from the log using "Copy without formatting"
		test('Export Report', function (done) {
			const expectedResponse = reportResponses.xxxReportOne;
			
			httpRequest.get(xxx)
				.set('Cookie', cookie)
				.expect(200)
				.then(response => {
					//console.log(JSON.stringify(response.text));
					expect(JSON.stringify(response.text)).toEqual(JSON.stringify(expectedResponse));
					done();
				});
		});
	}
);
