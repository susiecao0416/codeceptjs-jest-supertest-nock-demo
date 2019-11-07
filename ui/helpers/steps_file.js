'use strict';
let assert = require('assert');

//Define common methods used in this project
module.exports = function () {
	return actor({
		accessAppAs: function () {
			// this.amOnPage('/computers');
			// this.retry(5).waitForText('computers');
		},
		
		assertEquals: function (currentValue, expectedValue) {
			assert.equal(currentValue, expectedValue)
		}
	})
}
