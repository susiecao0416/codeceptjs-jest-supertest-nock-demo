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
https://demo.api-platform.com/


## 3 NodeJS Installation and Setup

### 3.1 Install NVM 0.35.1

https://github.com/nvm-sh/nvm

### 3.2 Install NodeJS 12.12

```
nvm install v12.12
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
```
export TESTURL="https://demo.api-platform.com"
npm run api
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

Please run below command to get the report locally:
```
npx allure serve ui/output/allure-report
```
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

https://www.npmjs.com/package/appium-doctor



## 6 Integration Tests Design

### 6.1 API/Event Tests Design

### 6.2 Mock Tests Design

### 6.3 Contract Tests Design
