// configurations read from environments
export const appConfig = {
	"testURL": process.env.TESTURL,
	"allAccessToken": process.env.ALLACCESSTOKEN,
	"noAccessToken": process.env.NOACCESSTOKEN,
	"apiURLs": {
		"addComputerAPI": "/computers"
	}
};

export const data =
	[
		{
			"baseURL": "http://computer-database.gatling.io",
			"testingdata": {
				"addComputer": {
					"name": "testComputer2019",
					"introducedDate": "2019-02-02",
					"discontinuedDate": "2022-02-02"
				}
			},
			"response":
				{
					
				}
		},
		{
			"baseURL": "https://staging.xxxx",
			"testingdata": {}
		}
	];