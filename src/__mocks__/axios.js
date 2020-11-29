const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: "mocked" }))
};

export default mockAxios;