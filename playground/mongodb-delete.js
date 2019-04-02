// const  MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb')


const url = 'mongodb://localhost:27017/TofuApp'
MongoClient.connect(url,  { useNewUrlParser: true }, (err, client) => {
    
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    
    const db = client.db('TofuApp')

    // deleteMany
    /* db.collection('Tofus').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result)
    }) */

    /* db.collection('Users').deleteMany({name: 'JosephK'}).then((result) => {
        console.log(result)
    }) */

    // deleteOne
    /* db.collection('Tofus').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result)
    }) */



    // findOneAndDelete
    /* db.collection('Tofus').findOneAndDelete({ completed: true}).then((result) => {
        console.log(result)
    }) */

    db.collection('Users').findOneAndDelete({
        _id: new ObjectId('5ca2a6f5f7567d3ab0ce8e3b')
    }).then((result) =>{
        console.log(result)
    })
    


    // client.close()
})