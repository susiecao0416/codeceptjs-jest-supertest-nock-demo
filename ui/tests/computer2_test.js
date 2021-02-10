Feature('Demo2 feature to test');

Scenario('Add Computer2', (I, homePage) => {
	homePage.openComputerPage();
	homePage.addComputer('testComputer202001', '2019-01-01', '2023-01-01');
	
	I.wait(2);
	// I.saveScreenshot("AddComputer.png");
	// I.seeVisualDiff("AddComputer.png", {tolerance: 0, prepareBaseImage: true});
});

