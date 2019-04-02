// const  MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb')


const url = 'mongodb://localhost:27017/TofuApp'
MongoClient.connect(url,  { useNewUrlParser: true }, (err, client) => {
    
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    
    const db = client.db('TofuApp')


    /* db.collection('Tofus').findOneAndUpdate({
        _id: new ObjectId("5ca2c0a4be139220650341ce")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    }) */

    
    //http://mongodb.github.io/node-mongodb-native/3.2/api/Collection.html#findOneAndUpdate
    //https://docs.mongodb.com/manual/reference/operator/update/inc/#up._S_inc
    db.collection('Users').findOneAndUpdate({
        _id: ObjectId("5ca2a6f7330c88319c64da6c")
    }, {
        $set: {
            name: 'Clementine',
            location: 'Hangover'
        },
        $inc: {
            age: -10
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
    


    // client.close()
})