"use strict";

import * as configurations from '../../../config/configurations'
import {getPostsResponse} from '../../../data/responsedata/getPosts'
import {postsRequestBody} from '../../../data/testingdata/postsRequestbody'

/*
* Below demo is based on: https://jsonplaceholder.typicode.com
* */
describe('Posts Management', () => {
		
		var requestParameters = '';
		var expectedResponse = '';
		var requestBody = '';
		global.newPostId = '';
		
		test('Get /posts by id', function (done) {
			
			expectedResponse = getPostsResponse({
				"id": 1
			});
			
			httpRequest
				.get(configurations.appConfig.apiURLs.posts + '/1')
				.set('Accept', 'application/json')
				.end(function (err, res) {
					expect(res.statusCode).toBe(200);
					expect(res.body).toMatchObject(expectedResponse);
					done();
				});
		});
		
		//Important: the resource will not be really added on the server but it will be faked as if.
		test('Post /posts', function (done) {
			requestBody = postsRequestBody({
				title: Math.random().toString(10),
			});
			
			httpRequest
				.post(configurations.appConfig.apiURLs.posts)
				// .set('Authorization', configurations.appConfig.systemEnv.allAccessToken)
				.set('Accept', 'application/json')
				.send(requestBody)
				.end(function (err, res) {
					expect(res.statusCode).toBe(201);
					global.newPostId = res.body.id;
					done();
				});
		});
		
		//Important: the resource will not be really deleted on the server but it will be faked as if.
		test('Delete /posts by id', function (done) {
			
			httpRequest
				.get(configurations.appConfig.apiURLs.posts + '/1')
				.set('Accept', 'application/json')
				.end(function (err, res) {
					expect(res.statusCode).toBe(200);
					done();
				});
		});
		
		test('Delete /posts with invalid id', function (done) {
			
			httpRequest
				.get(configurations.appConfig.apiURLs.posts + '/' + newPostId.toString()) // cause the id is not really added
				.set('Accept', 'application/json')
				.end(function (err, res) {
					expect(res.statusCode).toBe(404);
					done();
				});
		});
	}
);
