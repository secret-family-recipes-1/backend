// const request = require('supertest');
// const server = require('../../api/server');
// const db = require('../../database/dbConfig')


// describe('catorgerys routers ', () => {
//     describe('get categorys ', () => {
//         it('receives a 200 by getting categorys', () => {
//             return request(server)
//                 .get('/api/categories')
//                 .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Im5pY2siLCJpYXQiOjE1OTMwMjcyMTQsImV4cCI6MTU5MzExMzYxNH0.QI7ewQq539TRe1EGeIP4AN--Nj3OJDCfiQuH7c5ilVE")
//                 .expect(200)
//         })
//         it('post a new category', () => {
//             const name = "Nicko"
    
//             return request(server)
//                 .post("/api/auth/register")
//                 .send({ username: name, password: "pass" })
//                 .then(res => {
//                     const Id = res.body.data.id
//                     const token = res.body.token
//                     return request(server)          
//                 .post('/api/categories')
//                 .set('Authorization', token)
//                 .send({
//                     title: "5th breakfast" })
//                 .expect(200)
//                 })
//         })

//         it('fails to post category', () => {
//             const name = "Nicko"
    
//             return request(server)
//                 .post("/api/auth/register")
//                 .send({ username: name, password: "pass" })
//                 .then(res => {
//                     const Id = res.body.data.id
//                     const token = res.body.token
//                     return request(server)          
//                 .post('/api/categories')
//                 .set('Authorization', token)
//                 .send({
//                     title: ""  })
//                 .expect(400)
//                 })
//         })


//     })
// })

// test('delets a category' , async () => {
    
//         const name = "Nicko"

//         return request(server)
//             .post("/api/auth/register")
//             .send({ username: name, password: "pass" })
//             .then(res => {
//                 const Id = res.body.data.id
//                 const token = res.body.token
//                 return request(server)          
//             .post('/api/category')
//             .set('Authorization', token)
//             .send({id: 99, title: "new cat!!!!"})
//             .then(() => {
//                 return request(server)
//                 .delete("/api/catagories/99")
//                 .set('Authorization', token)
//                 .expect(200);
//             })
//             })
//     })
