const request = require('supertest');
const server = require('../../api/server');
const db = require('../../database/dbConfig')


beforeEach(async () => {
    await db("users").del();
});




describe('recipes routers ', () => {
    describe('get recipes ', () => {
        it('receives a 200 by getting recipes', () => {
            return request(server)
                .get('/api/recipes')
                .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Im5pY2siLCJpYXQiOjE1OTMwMjcyMTQsImV4cCI6MTU5MzExMzYxNH0.QI7ewQq539TRe1EGeIP4AN--Nj3OJDCfiQuH7c5ilVE")
                .expect(200)
        })
        it('post a new recipe', () => {
            const name = "Nicko"
    
            return request(server)
                .post("/api/auth/register")
                .send({ username: name, password: "pass" })
                .then(res => {
                    const Id = res.body.data.id
                    const token = res.body.token
                    return request(server)          
                .post('/api/recipes')
                .set('Authorization', token)
                .send({
                    title: "stuff and things",
                    source: "Mother",
                    user_id: Id
                  })
                .expect(200)
                })
        })

        it('fails to post recipe', () => {
            const name = "Nicko"
    
            return request(server)
                .post("/api/auth/register")
                .send({ username: name, password: "pass" })
                .then(res => {
                    const Id = res.body.data.id
                    const token = res.body.token
                    return request(server)          
                .post('/api/recipes')
                .set('Authorization', token)
                .send({
                    title: "",
                    source: "",
                    user_id: ""
                  })
                .expect(400)
                })
        })


    })
})

test('delets an issue that exists' , async () => {
    
        const name = "Nicko"

        return request(server)
            .post("/api/auth/register")
            .send({ username: name, password: "pass" })
            .then(res => {
                const Id = res.body.data.id
                const token = res.body.token
                return request(server)          
            .post('/api/recipes')
            .set('Authorization', token)
            .send({id: 99, title: "stuff and things", source: "Mother", user_id: Id})
            .then(() => {
                return request(server)
                .delete("/api/recipes/99")
                .set('Authorization', token)
                .expect(200);
            })
            })
    })
