Feature('Demo feature to test on Mobile');

Scenario('Demo test scenario on andriod using google calculator app', (I) => {
	I.click("#com.android.calculator2:id/digit_8");
	I.click("~plus");
	I.click("#com.android.calculator2:id/digit_2");
	I.click("~equals");
	I.see("10");
});

