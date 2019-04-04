const expect = require('expect')
const request = require('supertest')

const {app} = require('./../server')
const {Tofu} = require('./../models/tofu')

beforeEach((done) => {
    Tofu.remove({}).then(() => {
        done()
    })
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

            Tofu.find().then((tofus) => {
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
                    expect(tofus.length).toBe(0)
                    done()
                }).catch((e) => done(e))
            })

    })
})