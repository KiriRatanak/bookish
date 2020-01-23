const BookModel = require('./book.model')

module.exports = class BookController {
	async addBook(book) {
		const bookRecord = await BookModel.create(book)
		// this.eventEmitter.emit('book_created', { book: bookRecord })
		return bookRecord
	}

	async viewBook(id) {
		const bookRecord = await BookModel.view(id)
		return bookRecord
	}
}