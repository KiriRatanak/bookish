'use strict'

const BookModel = require('./book.model')

module.exports = class BookController {
	async addBook(book) {
		const bookRecord = await BookModel.create(book)
		// this.eventEmitter.emit('book_created', { book: bookRecord })
		return bookRecord
	}

	async viewBook(id) {
		const bookRecord = await BookModel.viewOne(id)
		return bookRecord
	}

	async viewBooks(limit, page) {
		const bookRecords = await BookModel.viewPage(limit, page)
		return bookRecords
	}
}

