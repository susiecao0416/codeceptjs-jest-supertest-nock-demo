export const postsRequestBody = (request) => (
	{
		
		title: 'foo',
		body: 'bar',
		userId: 1,
		...request
	}
);

