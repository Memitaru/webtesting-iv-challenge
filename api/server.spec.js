const request = require('supertest');

const db = require('../data/dbConfig.js')

const server = require('./server.js');

describe('server.js', () => {
    it('should set the test env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET /', () => {
        it('should return status 200', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
        })

        it('should return JSON', async () => {
            const res = await request(server).get('/')
            expect(res.type).toBe('application/json');
        })

        it('should return proper message', async () => {
            const res = await request(server).get('/')
            expect(res.body).toEqual({message: "Server is up"})
        })
    })

})