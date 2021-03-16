import * as faker from 'faker';

export const postsRequestBody = (request) => (
	{
		
		title: faker.name.title,
		body: faker.name.gender(),
		userId: faker.random.number(),
		...request
	}
);

