Feature('APIs tests using CodeceptJS');

var assert = require('assert'); // You can also use assert libraries

Scenario('test API', async (I) => {
	let response = await I.sendGetRequest('/posts/1');
	assert.equal(response.status, 200);
	assert.equal(response.data.userId, 1);
});