const I = actor();

module.exports = {
	
	// set locators
	fields: {
		addComputerButton: '#add',
		computerNameField: '#name',
		introducedField: '#introduced',
		discontinuedField: '#discontinued',
		createButton: '.btn.primary'
	},
	
	openComputerPage() {
		I.amOnPage('/computers');
		I.retry(5).waitForText('computers', 10);
		I.wait(5);
	},
	
	// set methods
	addComputer(computerName, introducedDate, discontinuedDate) {
		I.click(this.fields.addComputerButton);
		I.retry(5).waitForElement(this.fields.computerNameField, 5);
		I.fillField(this.fields.computerNameField, computerName);
		I.fillField(this.fields.introducedField, introducedDate);
		I.fillField(this.fields.discontinuedField, discontinuedDate);
		I.click(this.fields.createButton);
	},
	
	checkMsg(expectedResult) {
		I.see('Done! Computer ' + expectedResult + ' has been created');
	},
	
	clickLink(linkType) {
		switch (linkType) {
			case '1':
				I.click(this.xxxLink);
				break;
			case '2':
				I.click(this.xxxLink);
				break;
		}
	}
}
