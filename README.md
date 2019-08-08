# testApp Acceptance Tests

# How to design acceptance tests
## Save screenshot
1 Please change "false" to "true" when you save screenshot as base images
``
I.saveScreenshot("xxxx.png", false);
``
Before committing the code, please change the parameter back to "false";

2 Please make sure page data not exceeding 2 pages to take screenshot: 
if the page data size is more than 2 it causes much time to save screenshot in docker, which causes scripts not stable

3 MUST save screenshot in local docker cause the picture resolution taken in docker is smaller than local machine without docker


# How to run our acceptance tests locally

## The repos
Before anything else, make sure that you have both repositories updated. If you don't have it cloned yet, use this SSH:
 - git@xxx:xxx/testApp.git

Don't forget to install all the dependencies for each repo:
``sh
$ npm install -d
``

## Running tests
Go to the acceptance-tests directory and follow the steps:
1. Start the application by executing
``sh
$ docker-compose run --service-ports web-ci
``
2. Run all acceptance-tests by executing

### To run/debug all tests with local docker:
``sh
$ docker-compose build acceptance-tests
$ docker-compose run acceptance-tests
``

### To run all tests locally:
``sh
$ npm run test
``

## Useful tips

[!] You can use npm run tests-with "write a scenario or feature name here" to filter tests to be executed.
    e.g.,
    ``sh
    npm run tests-with "write a scenario or feature name here"
    ``

[!] An 'x' in the beginning of the scenario name will skip it.
    e.g., xScenario('User can select multiple regions', (I) => {

[!] If you need to run only one scenario, inlude a ".only" after the scenario key word.
    e.g., Scenario.only('User can select multiple regions', (I) => {

[!] Our tests are split in nodes to allows paralelize the execution. If you want to run only one node, use
``docker-compose run -e NODE=1 acceptance-tests``
where "1" can be replaced by the node number you want to execute.

## Mobile Testing

### Reference
https://www.npmjs.com/package/appium-doctor