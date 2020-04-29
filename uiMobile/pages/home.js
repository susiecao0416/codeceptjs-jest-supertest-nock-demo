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
	// set methods
	addComputer(computerName, introducedDate, discontinuedDate) {
		I.click(this.fields.addComputerButton);
		I.retry(5).waitForElement(this.fields.computerNameField, 5);
		I.fillField(this.fields.computerNameField, computerName);
		I.fillField(this.fields.introducedField, introducedDate);
		I.fillField(this.fields.discontinuedField, discontinuedDate);
		I.click(this.fields.createButton);
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
