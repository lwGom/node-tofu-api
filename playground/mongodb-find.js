// const  MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb')


const url = 'mongodb://localhost:27017/TofuApp'
MongoClient.connect(url,  { useNewUrlParser: true }, (err, client) => {
    
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    
    const db = client.db('TofuApp')


    //http://mongodb.github.io/node-mongodb-native/3.2/api/Cursor.html

    /* db.collection('Tofus').find({
        _id: new ObjectId('5ca2a337be13922065033e50')
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable tofetch tofus', err)
    }) */

    /* db.collection('Tofus').find().count().then((count) => {
        console.log(`Tofus count: ${count}`)
    }, (err) => {
        console.log('Unable tofetch tofus', err)
    }) */

    db.collection('Users').find({name: 'JosephK'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable tp fetch tofus', err)
    })

    db.collection('Users').find({name: 'JosephK'}).count().then((count) => {
        console.log('Count:', count)
    })


    //client.close()
})