Feature('Demo1 feature to test');

Scenario('Add Computer1', (I, homePage) => {
	homePage.openComputerPage();
	homePage.addComputer('testComputer202002', '2019-01-01', '2022-01-01');
	
	I.wait(2);
	I.saveScreenshot("AddComputer.png");
	I.seeVisualDiff("AddComputer.png", {tolerance: 0, prepareBaseImage: true});
});

