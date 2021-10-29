const express = require("express");
const app = express();
const PORT = 8080;
const createActorTable = require('./db/actor')
const db = require('./db/index')

app.use(express.json())

// simple route
app.get("/", async (req, res, next) => {
    res.send("Welcome to RESTful API Application.")
});

app.post("/api/actor", async (req, res, next) => {
	try{
		const actor = req.body
		const sqlText = `INSERT INTO actor (first_name, last_name, last_update) VALUES ($1, $2, NOW()) RETURNING *`
		const sqlParams = [actor.first_name, actor.last_name]
		const result = (await db.query(sqlText, sqlParams)).rows
		res.json(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});
// get route
app.get("/api/actor", async (req, res, next) => {
	try{
		const sqlText = `SELECT * FROM actor`
		const result = (await db.query(sqlText)).rows
		res.json(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});

app.get("/api/actor/:id", async (req, res, next) => {
	try{
		const sqlText = `SELECT * FROM actor WHERE actor_id = $1`
		const sqlParams = [req.params.id]
		const result = (await db.query(sqlText, sqlParams)).rows
		res.json(result)
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