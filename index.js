const planetsData = require('./data');
const app = require('express')();
const PORT = 8000;

app.get('/all', (req, res) => {
	res.status(200).send(
		planetsData
	)
})

app.listen(
	PORT,
	() => console.log(`Running on port ${PORT}`)
)
