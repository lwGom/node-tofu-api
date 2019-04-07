var express = require('express')
var bodyParser = require('body-parser')
var {ObjectId} = require('mongodb')

var {mongoose} = require('./db/mongoose')
var {Tofu} = require('./models/tofu') 
var {User} = require('./models/user')


var app = express()

app.use(bodyParser.json())

app.post('/tofus', (req, res) => {
	console.log(req.body)
	var tofu = new Tofu({
		text: req.body.text
	})

	tofu.save().then((doc) => {
		res.send(doc)
	
	}, (e) => {
		res.status(400).send(e)
	})

})


app.get('/tofus', (req, res) => {
	Tofu.find().then((tofus = []) => {
		res.send({tofus})
	}, (e) => {
		res.status(400).send(e)
	})
})


// get /tofus/234567890

app.get('/tofus/:id', (req, res) => {
	var id = req.params.id
	
	if(!ObjectId.isValid(id)){
		return res.status(404).send()
	}

	Tofu.findById(id).then((tofu) => {
		if(!tofu){
			return res.status(404).send()
		}
		
		res.send({tofu})

	}).catch((e) => res.status(400).send())
})




app.listen(3000, () => {
	console.log('Started on port 3000')
})



module.exports = {app}


/* var newTofu = new Tofu({
	text: 'Edit the cat food',
    
})

newTofu.save().then((doc) => {
	console.log('Saved tofu:', doc)
}, (e) => {
	console.log('Unable to save tofu')
}) 


var newUser = new User({
  email: 'ema@il.pt'
})

newUser.save().then((doc) => {
	console.log('Saved user:', doc)
}, (e) => {
  console.log('Unable to save user', e)
})*/