const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const planetsData = require('./data');
const PORT = 8000;

// Environment Variables
dotenv.config()

// Connect to DB
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWD}@mongo.jynjm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

mongoose.connect(dbURI)
	.then(res => console.log('Connected to DB', res))
	.catch(err => console.log(err))

// App and Middlewares

const app = express()

// Routes
app.get('/all', (req, res) => {
	res.status(200).send(
		planetsData
	)
})

// Listen
app.listen(
	PORT,
	() => console.log(`Running on port ${PORT}`)
)
