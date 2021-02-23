"use strict";

import * as configurations from './configurations'
import supertest from "supertest";
import server from '../src/index';

const testAppURL = configurations.appConfig.systemEnv.testURL;
global.httpRequest = supertest(server);
global.testData = '';
global.isLocal = true;
//global.httpRequest = request(testAppURL); without using coverage

// Get testing data for current env
if (testAppURL == configurations.appConfig.appwEnvURLs.local) {
	global.isLocal = true; // Using local env for detailed function tests
	console.log('Local API testing starts on ' + testAppURL);
} else {
	global.isLocal = false; // Using non-local env to check if the apis can be pinged only
	console.log('Non-Local API testing starts on ' + testAppURL);
}


