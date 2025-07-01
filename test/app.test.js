const request = require('supertest');
const { app, server } = require('../index');

describe('get', () => {
    it('should return 200 status and correct message', async () =>{
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hi Welcome to learning deployment');
    })
})
afterAll(() => {
    server.close();
})