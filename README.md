## 1 Goal
The guide is used to setup the automation framework for UI tests and integration tests.

## 2 Tech/Code Introduction

### 2.1 Tech Introduction

- All testing framwork is based on NodeJS
- UI
    - CodeceptJS: https://codecept.io/basics
    - Nighmare: https://github.com/segmentio/nightmare
                https://codecept.io/nightmare
    - Appium: http://appium.io/docs/en/about-appium/getting-started/?lang=en
    
- Integration
    - Jest: https://jestjs.io/docs/en/getting-started
    - SuperTest: https://github.com/visionmedia/supertest
    - Mountebank: http://www.mbtest.org/docs/gettingStarted
    - PACT: https://docs.pact.io/5-minute-getting-started-guide   

- All the UI demo is provided by testing app provided by Gatling framework
http://computer-database.gatling.io

- All the API demo is provided by 
https://jsonplaceholder.typicode.com/guide.html

## 3 NodeJS Installation and Setup

### 3.1 Install NVM 0.35.1

https://github.com/nvm-sh/nvm

### 3.2 Install NodeJS 12.12

```
nvm install V12.12
```
Then use below command to check if the installation is successful
```
node -v
npm -v
```

### 3.3 Install Java8 and configure Java env when you install appium to run mobile tests

http://appium.io/docs/en/about-appium/getting-started/?lang=en#getting-started

If you do not want to run mobile, you can remove below 4 packages in package.json:

```
  "appium": "^1.14.1",
  "appium-doctor": "^1.11.1",
  "wd": "^1.11.3",
  "webdriverio": "^5.11.14"
```

### 3.4 Install all modules

Run below command in current directory to install all needed framworks configured in "package.json"

```
npm install
```
After this step, all installation is completed, then you can run below tests.

## 4 Run Tests locally

### 4.1 Run all UI tests locally

```    
npm run test
```

### 4.2 Run specific UI test locally

```    
npm run tests-with "write a scenario or feature name here"
```

### 4.3 More details on how to run/debug ui tests

Please refer to https://codecept.io/advanced

### 4.4 Run all UI features locally

```    
npm run feature
```

### 4.5 Run Integration Tests locally

#### 4.5.1 Run API Tests
- If using supertest to run api
```
export TESTURL="https://jsonplaceholder.typicode.com"
npm run api
```

- If using codeceptjs to run api
```
npm run test-api
```

#### 4.5.2 Run Contract Tests

## 5 UI Tests Framework Design

### 5.1 Web Tests

#### 5.1.1 Demo test

Please refer to "ui/tests/computer_test.js"

#### 5.1.2 Page Object

https://codecept.io/pageobjects

#### 5.1.3 BDD

Please refer to demo under "ui/features" folder

https://codecept.io/bdd

#### 5.1.4 Reporting
- Please run below command to get the UI report locally:
```
npx allure serve ui/output/allure-report
```

- Please run below command to get the API using codeceptjs report locally:
```
npx allure serve integration/output/allureresults
```

- If config allure in CI/CD, please using below command:
```
sudo apt-add-repository ppa:yandex-qatools/allure-framework -y && sudo apt-get update && sudo apt-get install allure-commandline && allure generate ui/output/allure-report
```
Then the reports are generated based on the allure results, and open the index.html.

#### 5.1.5 Data Driven

https://codecept.io/data



### 5.2 Visual Testing Design

#### 5.2.1 Save screenshot

#### 5.2.2 Compare differences

1 Please change "false" to "true" when you save screenshot as base images
``
I.saveScreenshot("xxxx.png", false);
``
Before committing the code, please change the parameter back to "false";

2 Please make sure page data not exceeding 2 pages to take screenshot: 
if the page data size is more than 2 it causes much time to save screenshot in docker, which causes scripts not stable

3 MUST save screenshot in local docker cause the picture resolution taken in docker is smaller than local machine without docker


### 5.3 Mobile Testing
#### 5.3.1 Android test
##### 5.3.1.1 Setup environment
- Install JDK 1.8 and Android SDK
- Install NodeJS
- Install ADB
- Install Appium if you want to know appium
- Add one virtual device using the Android SDK
https://developer.android.com/studio/run/emulator
##### 5.3.1.1 Run the mobile testing using the virtual devices configured in Android Studio
- Run below command
``
npm run testAndroid
``
#### 5.3.2 IOS

## 6 Integration Tests Design
### 6.1 API/Event Tests Design
Here lists the validation points we need to do:
- For all request, need to validate the response code and body
- For POST/PUT request, also use "get" api to check the changes are added/updated correctly for each field
- For DELETE request, also use "get" api to check it is really deleted

### 6.2 Mock Tests Design
- Mountebank: http://www.mbtest.org/
- Please run "npm run mb" command first

### 6.3 Contract Tests Design
#### PACT Demo
This is a demo on how to use pact for contract testing

#### Env
NodeJS 12.10.0

#### Testing framework
- Jest: https://jestjs.io/docs/en/getting-started
- Pact: https://docs.pact.io/

#### Code structure
1 consumer
- pacts
  automatically generated after running consumer tests
- tests

2 provider
- src
  the provider demo that provides two apis: get people/get leave
- tests

#### How to run
1 Consumer
1.0 Principle
- Create the Pact object
- Start the Mock Provider that will stand in for your actual Provider
- Add the interactions you expect your consumer code to make when executing the tests
- Write your tests - the important thing here is that you test the outbound collaborating function which calls the Provider, and not just issue raw http requests to the Provider. This ensures you are testing your actual running code, just like you would in any other unit test, and that the tests will always remain up to date with what your consumer is doing.
- Validate the expected interactions were made between your consumer and the Mock Service
- Generate the pact(s)
- Publish the pact(s)

1.1 Go to integration/pact/consumer folder, and run
``
npm install
npm run test
``
2 Share the generated contracts in consumer/pacts folder to PactBroker server
2.1 You can use PactFlow provided by Pact, which is cloud PactBroker server
- You can setup server here: https://freebroker.pact.dius.com.au/
- You can follow below guides to publish your generated contracts to this server:
You can use postman or publish OR
https://github.com/pact-foundation/pact_broker/wiki/Publishing-and-retrieving-pacts
You can go to the root folder and type below command to publish using code:
`
export PACT_BROKER_TOKEN='xxx'  //You can get this from https://freebroker.pact.dius.com.au -> Settings -> API Tokens
node integration/pactContractTesting/provider/publish.js
`

2.2 You can setup PactBroker server by youself or other ways to share
https://github.com/pact-foundation/pact-js/#publishing-pacts-to-a-broker
https://www.softwaretestinghelp.com/publish-pact-contract-to-pact-broker/

3 Provider
3.1 Go to provider folder, and run
``
npm install
npm run start
npm run test
``

#### Provider
https://github.com/pact-foundation/pact-js#provider-api-testing

### WorkShop
https://github.com/DiUS/pact-workshop-js

### Issues
- TypeError: Cannot read property 'writePact' of undefined
1.1 Set Jest timeout
1.2 The mock server provider port might be used, change to another port
