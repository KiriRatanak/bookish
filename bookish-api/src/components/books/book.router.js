const express = require('express')
const router = express.Router()
const BookController = require('./book.controller')
const bookController = new BookController()

module.exports = async () => {
	router.get('/', async (req, res) => {
		const bookRecord = await bookController.viewBook(req.query.id)
		return res.json({ book: bookRecord }).status(200)
	})
	router.post('/', async (req, res) => {
		const bookRecord = await bookController.addBook(req.body)
		return res.json({ book: bookRecord }).status(201)
	})

	return router
}