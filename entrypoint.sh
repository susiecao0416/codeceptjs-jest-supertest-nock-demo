#!/bin/bash -ex

# test if app is available
./wait-for-it.sh test:3001 -t 600  //wait for testing app is started
sleep 20

# run the node specified by NODE env var
# run all tests by default (if NODE not specified)
if [[ "$NODE" -eq "1" || "$NODE" -eq "2" ]]; then
  echo "Running all acceptance tests on Node $NODE"
  npm run test-ci-node$NODE
elif [[ "$NODE" == "integration" && "$TESTURL" == "http://apphost:3000" ]]; then
    echo "Running integration tests in local env"
    npm run api && npm run event && npm run readOnly
elif [[ "$NODE" == "integration" && "$TESTURL" == "http://staging.xxx" ]]; then
    echo "Running integration tests in staging env"
    npm run apiStaging && npm run eventStaging && npm run readOnlyStaging
else
  echo "Running specific acceptance tests in docker"
  npm run test-ci-grep $NODE
fi
