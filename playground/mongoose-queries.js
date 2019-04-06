const {mongoose} = require('./../server/db/mongoose')
const { ObjectId } = require('mongodb')
const {Tofu} = require('./../server/models/tofu')
const {User} = require('./../server/models/user')



//USERS ----------------------
id = '5ca407eb9d2ca625e0aeca'

if(!ObjectId.isValid(id)){
    console.log('ID not valid')
}


User.findById(id).then((user) => {
    if(!user){
        console.log('Sorry, no user')
    }
    console.log('User:', user)
}).catch((e) => console.log(e))



//TOFUS ----------------------
/* var id = '5ca7f7cba8b2d3245c'

if(!ObjectId.isValid(id)){
    console.log('ID not valid')
}


Tofu.find({
    _id: id
}).then((tofus) => {
    console.log('Tofus:', tofus)
})

Tofu.findOne({
    _id: id
}).then((tofu) => {
    console.log('Tofu:', tofu)
}) 

Tofu.findById(id).then((tofu) => {
    if(!tofu){
        console.log('Quero ir tofu')
    }
    console.log('Tofu:', tofu)
}).catch((e) => console.log(e))*/