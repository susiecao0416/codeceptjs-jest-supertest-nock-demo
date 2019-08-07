Feature('APIs tests using CodeceptJS');

Scenario('test API', async(I) => {
   let response =  await I.sendGetRequest('/api/computer', {"name": "test"});
});