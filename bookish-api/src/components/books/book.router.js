const express = require('express')
const router = express.Router()
const BookController = require('./book.controller')
const bookController = new BookController()

module.exports = async () => {
	router.get('/:id', async (req, res) => {
		const bookRecord = await bookController.viewBook(req.params.id)
		return res.json({ book: bookRecord }).status(200)
	})
	router.get('/', async (req, res) => {
		let limit = req.query.limit <= 50 ? parseInt(req.query.limit) : 10
		let page = 0
		if(req.query.page) {
			page = parseInt(req.query.page)
			page = Number.isInteger(page) ? page : 0
		}
		const bookRecords = await bookController.viewBooks(limit, page)
		return res.json({ books: bookRecords }).status(200)
	})
	router.post('/', async (req, res) => {
		const bookRecord = await bookController.addBook(req.body)
		return res.json({ book: bookRecord }).status(201)
	})
	return router
}