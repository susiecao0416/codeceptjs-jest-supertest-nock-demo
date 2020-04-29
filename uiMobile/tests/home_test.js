Feature('Demo feature to test on Mobile');

Scenario.skip('Demo test scenario on andriod using google calculator app', (I) => {
	I.click("#com.android.calculator2:id/digit_8");
	I.click("~plus");
	I.click("#com.android.calculator2:id/digit_2");
	I.click("~equals");
	I.see("10", "#com.android.calculator2:id/result");
});

Scenario('Demo test scenario on andriod using installed app', (I) => {
	I.installApp('/uiMobile/app/calendar.apk');
});


