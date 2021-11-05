const express = require("express")
const app = express()
const cors = require('cors')
const createActorTable = require('./db/actor')
const actor = require('./router/actor')
const PORT = 8080

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/actor', actor)

var corsOptions = {
	origin: "http://localhost:8081"
};

// simple route
app.get("/", async (req, res, next) => {
    res.send("Welcome to RESTful API Application.")
});

// set port, listen for requests
app.listen(PORT, async() => {
	try{
		await createActorTable()
		console.log(`Server is running on port ${PORT}.`)
	}
	catch(error){
		console.error(error)
	}
});