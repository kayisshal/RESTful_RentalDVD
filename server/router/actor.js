const express = require("express")
const router = express.Router()
const db = require('../db/index')

// CREATE data (insert)
router.post("/", async (req, res, next) => {
	try{
		const actor = req.body
		const sqlText = `INSERT INTO actor (first_name, last_name, last_update) VALUES ($1, $2, NOW()) RETURNING *`
		const sqlParams = [actor.first_name, actor.last_name]
		const result = (await db.query(sqlText, sqlParams)).rows
		res.send(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});


// READ data (all data)
router.get("/", async (req, res, next) => {
	try{
		const sqlText = `SELECT * FROM actor ORDER BY actor_id ASC`
		const result = (await db.query(sqlText)).rows
		res.send(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});

// READ data (by ID)
router.get("/:id", async (req, res, next) => {
	try{
		const sqlText = `SELECT * FROM actor WHERE actor_id = $1`
		const sqlParams = [req.params.id]
		const result = (await db.query(sqlText, sqlParams)).rows
		res.send(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});

// UPDATE data (by ID)
router.put("/:id", async (req, res, next) => {
	try{
		const actor = req.body
		const sqlText = `UPDATE actor SET first_name = $1, last_name = $2, last_update = NOW() WHERE actor_id = $3 RETURNING *`
		const sqlParams = [actor.first_name, actor.last_name, req.params.id]
		const result = (await db.query(sqlText, sqlParams)).rows
		res.send(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});

// DELETE data (by ID)
router.delete("/:id", async (req, res, next) => {
	try{
		const sqlText = `DELETE FROM actor WHERE actor_id = $1 RETURNING *`
		const sqlParams = [req.params.id]
		const result = (await db.query(sqlText, sqlParams)).rows
		res.send(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});

// DELETE All data (CASCADE)
router.delete("/", async (req, res, next) => {
	try{
		const sqlText = `TRUNCATE actor CASCADE`
		const result = (await db.query(sqlText)).rows
		res.send(result)
	}
	catch(error){
		console.error(error)
		next(error)
	}
});

module.exports = router