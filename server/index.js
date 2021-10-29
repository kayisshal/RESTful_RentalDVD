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

// CREATE data (insert)
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


// READ data (all data)
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

// READ data (by ID)
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

// UPDATE data (by ID)
app.put("/api/actor/:id", async (req, res, next) => {
	try{
		const actor = req.body
		const sqlText = `UPDATE actor SET first_name = $1, last_name = $2, last_update = NOW() WHERE actor_id = $3 RETURNING *`
		const sqlParams = [actor.first_name, actor.last_name, req.params.id]
		const result = (await db.query(sqlText, sqlParams)).rows
		res.json(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});

// DELETE data (by ID)
app.delete("/api/actor/:id", async (req, res, next) => {
	try{
		const sqlText = `DELETE FROM actor WHERE actor_id = $1 RETURNING *`
		const sqlParams = [req.params.id]
		const result = (await db.query(sqlText, sqlParams)).rows
		res.json(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});

// DELETE All data (CASCADE)
app.delete("/api/actor", async (req, res, next) => {
	try{
		const sqlText = `TRUNCATE actor CASCADE`
		const result = (await db.query(sqlText)).rows
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