Feature('Demo feature to test');

Scenario('Add Computer', (I, homePage) => {
	homePage.openComputerPage();
	homePage.addComputer('testComputer2019', '2019-01-01', '2023-01-01');
	
	I.wait(5);
	I.saveScreenshot("AddComputer.png");
	I.wait(5);
	I.seeVisualDiff("AddComputer.png", {tolerance: 0, prepareBaseImage: false});
});

