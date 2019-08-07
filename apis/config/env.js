"use strict";

import * as configurations from './configurations'
import request from "supertest";

const testAppURL = configurations.appConfig.testURL;
global.httpRequest = request(testAppURL);
global.testData = '';
global.isLocal = true;

// Get testing data for current env
if (testAppURL == configurations.data[0].baseURL) {
	global.testData = configurations.data[0]; // local
	global.isLocal = true; // Using local env for detailed function tests
	console.log('xxx API testing starts');
} else if (testAppURL == configurations.data[1].baseURL) {
	global.testData = configurations.data[1]; // staging
	global.isLocal = false; // Using non-local env to check if the apis can be pinged only
	console.log(' xxx testing env: API testing starts');
}


