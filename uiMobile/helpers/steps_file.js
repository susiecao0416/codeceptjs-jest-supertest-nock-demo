'use strict';
let assert = require('assert');

module.exports = function () {
	return actor({
		accessAppAs: function () {
			this.amOnPage('http://computer-database.gatling.io');
			this.retry(5).waitForText('computers');
		},
		
		assertEquals: function (currentValue, expectedValue) {
			assert.equal(currentValue, expectedValue)
		}
	})
}
