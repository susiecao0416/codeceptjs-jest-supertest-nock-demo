// configurations read from environments
export const appConfig = {
	
	systemEnv: {
		testURL: process.env.TESTURL,
		allAccessToken: process.env.ALLACCESSTOKEN,
		noAccessToken: process.env.NOACCESSTOKEN,
		thoughtDataEventKey: process.env.THOUGHTDATAAPIKEY
	},
	
	appwEnvURLs: {
		local: 'http://localhost:2000',
		staging: 'https://staging.app.com',
		production: ""
	},
	
	apiURLs: {
		posts: '/posts'
	}
};