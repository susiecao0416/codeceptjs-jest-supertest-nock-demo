#!/bin/bash -ex

# test if app is available
if [ $RAILS_ENV = 'automation' ]; then
  ./wait-for-it.sh apphost:3000 -t 150
else
  ./wait-for-it.sh apphost:3001 -t 150
fi

# run the node specified by NODE env var
# run all tests by default (if NODE not specified)

if [ -z "$NODE" ]; then
  echo "Running all tests"
  npm run test-ci;
else
  echo "Running Node $NODE"
  npm run test-ci-node$NODE
fi