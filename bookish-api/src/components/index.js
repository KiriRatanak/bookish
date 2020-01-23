'use strict'

const BookRouter = require('./books/book.router')

module.exports = async(app) => {
	app.use('/books', await BookRouter())
	return app
}