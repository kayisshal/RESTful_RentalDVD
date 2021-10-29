const express = require("express");
const app = express();
const PORT = 8080;
const createActorTable = require('./db/actor')
const db = require('./db/index')

// simple route
app.get("/", async (req, res, next) => {
    res.send("Welcome to RESTful API Application.")
});

// route get

app.get("/api/actor", async (req, res, next) => {
	try{
		let sql = `SELECT * FROM actor`
		let result = (await db.query(sql)).rows
		res.send(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
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