const {I, homePage} = inject();
// Add in your custom step files

Given('I am on Computer Management page', () => {
	// From "ui/features/computer.feature" {"line":7,"column":5}
	homePage.openComputerPage();
});

Given('I Add computer with valid information', () => {
	// From "ui/features/computer.feature" {"line":7,"column":5}
	homePage.addComputer('test1', '2019-02-02', '2019-02-02');
});

When('I Add computer with valid {string} and {string} and {string}', (computerName, introducedDate, discontinuedDate) => {
	// From "ui/features/computer.feature" {"line":8,"column":5}
	homePage.addComputer(computerName, introducedDate, discontinuedDate);
});

Then('I can view computer is added successfully', () => {
	// From "ui/features/computer.feature" {"line":9,"column":5}
	homePage.checkMsg('test1');
});

Then('I can view computer is added successfully with the correct computer name {string}', (computerName) => {
	// From "ui/features/computer.feature" {"line":9,"column":5}
	homePage.checkMsg(computerName);
});


