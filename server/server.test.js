const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('server',() =>{
    describe('#/',()=>{
        it('should expect http res', (done) =>{
            request(app)
            .get('/')
            .expect(200)
            .expect((res) =>{
                expect(res.body).toInclude({
                    error:404
                })
            })
            .end(done);
        })
    }),

    describe('#/user',() =>{
        it('should check for user exist', (done) =>{
            request(app)
            .get('/user')
            .expect(200)
            .expect((res) =>{
                expect(res.body).toInclude({
                    name:"Vishesh",
                    age:27
                })
            })
            .end(done)
        })
    })
})

