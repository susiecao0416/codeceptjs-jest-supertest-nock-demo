beforeAll(() => provider.setup()); // Create mock provider
afterEach(() => provider.verify()); // Ensure the mock provider verifies expected interactions for each test
afterAll(() => provider.finalize()); // Tear down the mock and write the pact


