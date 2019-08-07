import nock from "nock";
import request from "supertest";
import fs from "fs";

var testRequest = request('http://apphost:3000');

describe('Get mock api response', () => {
	test('Get mock response', function (done) {
		nock("http://apphost:3000")
			.get('/postcodes/')
			.reply(200, {
				"status": 200,
				"message": "This is a mocked response"
			});
		
		testRequest
			.get('/postcodes/')
			.end(function (err, res) {
				//assert that the mocked response is returned
				expect(200);
				expect(res.body.message).toEqual("This is a mocked response");
				done();
			});
	}),
		test('Get mock response from json template', function (done) {
			var contents = fs.readFileSync("./apis/demo/template.json");
			var jsonContent = JSON.parse(contents);
			
			nock("http://apphost:3000")
				.get('/postcodesjson/')
				.reply(200, jsonContent);
			
			testRequest
				.get('/postcodesjson/')
				.end(function (err, res) {
					//assert that the mocked response is returned
					expect(200);
					expect(res.body).toEqual(jsonContent);
					done();
				});
		})
	
})