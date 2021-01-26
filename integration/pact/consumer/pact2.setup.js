import {Pact} from '@pact-foundation/pact'

global.port = 6000;
global.provider = new Pact({
	port: global.port,
	log: './logs/pact.log',
	dir: './pacts',
	spec: 2,
	cors: true,
	pactfileWriteMode: 'update',
	consumer: 'consumer2',
	provider: 'provider2'
});
