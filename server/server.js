var express = require('express')
var bodyParser = require('body-parser')

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






app.listen(3000, () => {
	console.log('Started on port 3000')
})


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