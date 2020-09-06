const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig')






describe('server.js', () => {
    
    describe('GET/', () => {
        it('should return status code 200', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/');
            expect(res.type).toMatch('application/json');
        });

        it('should return { api: "its a go" }', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ api: 'up'});
        });
    });

    
})




describe("POST /api/auth/register to be successful", () => {
    // it('should register', () => {
    //     const name = "Nicko"

    //     return request(server)
    //         .post("/api/auth/register")
    //         .send({ username: name, password: "pass" })
    //         .then(res => {
    //             expect(res.body.data.username).toBe(name)
    //         })
    // })
    it('returns a 400 if you dont send valid user', () => {
        return request(server)
            .post('/api/auth/register')
            .send({ username: "nahhhh" })
            .expect(400)
    })
});

describe('tests the login functionality', () => {
    describe('you can login', () => {
        it('receives a 401 if you dont provide credentials', () => {
            return request(server)
                .post('/api/auth/login')
                .send({username: "notunique", password: "password"})
                .expect(401)
        })
        it('receives a 200 upon successful login', async () => {
            const name = "Nicko"
            const response = await request(server)

                .post('/api/auth/register')
                .send({username: name, password: "pass"}) 
                const loginres = await request(server)
                .post('/api/auth/login')
                .send({username: name, password: "pass"})
                expect(loginres.status).toBe(200)
        })

    })
})




