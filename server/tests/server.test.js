const expect = require('expect')
const request = require('supertest')
const {ObjectId} = require('mongodb')

const {app} = require('./../server')
const {Tofu} = require('./../models/tofu')

const tofus = [{
    _id: new ObjectId(),
    text: 'First test tofu'
}, {
    _id: new ObjectId(),
    text: 'Second test tofu'
}]



beforeEach((done) => {
    Tofu.remove({}).then(() => {
        return Tofu.insertMany(tofus)
    }).then(() => done())
})



describe('Post /tofus', () => {
    it('should create a new tofu', (done) => {
        var text = 'Test tofu text'

        request(app)
            .post('/tofus')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)

            })
    
            .end((err, res) => {
                if(err){
                    return done(err)
                }

            Tofu.find({text}).then((tofus) => {
                expect(tofus.length).toBe(1)
                expect(tofus[0].text).toBe(text)
                done()

            }).catch((e) => done(e))
        })

    })

    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/tofus')
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err) {
                    return done(err)
                }
                Tofu.find().then((tofus) => {
                    expect(tofus.length).toBe(2)
                    done()
                }).catch((e) => done(e))
            })

    })
})


describe('GET /tofus', () => {
    it('should get all tofus', (done) => {
        request(app)
            .get('/tofus')
            .expect(200)
            .expect((res) => {
                expect(res.body.tofus.length).toBe(2)
            })
            .end(done)
    })
})


describe('GET /tofus/:id', () => {
    it('Should return tofu doc', (done) => {
        request(app)
            .get(`/tofus/${tofus[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.tofu.text).toBe(tofus[0].text)
            })
            .end(done)
    })

    it('Should return 404 if todo not found', (done) => {
        var hexId = new ObjectId().toHexString()
        request(app)
            .get(`/todos/${hexId}`)
            .expect(404)
            .end(done)            
    })

    it('Should return 404 for non-object ids', (done) => {
        
        request(app)
            .get(`/todos/123abc`)
            .expect(404)
            .end(done)            
    })
})


