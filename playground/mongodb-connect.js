// const  MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb')


const url = 'mongodb://localhost:27017/TofuApp'
MongoClient.connect(url,  { useNewUrlParser: true }, (err, client) => {
    
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    
    const db = client.db('TofuApp')

    /* db.collection('Tofus').insertOne({
        text: 'Something tofu',
        completed: false
    }, (err, result) => {
        if(err)
            return console.log('Unable to insert tofu')

        console.log(JSON.stringify(result.ops, undefined, 2))
    }) */

    db.collection('Users').insertOne({
        name: 'JosephK',
        age: 34,
        location: 'Philly'
    }, (err, result) => {
        if(err)
            return console.log('Unable to insert user')

        var id = new ObjectId(result.ops[0]._id)
        console.log(id.getTimestamp())
    })

    client.close()
})