import {Pact} from '@pact-foundation/pact'

//create a mock server
global.port = 7000;
global.provider = new Pact({
	port: global.port,
	log: './logs/pact.log',
	dir: './pacts',
	spec: 2,
	cors: true,
	pactfileWriteMode: 'update',
	consumer: 'consumer1',
	provider: 'provider1'
});
