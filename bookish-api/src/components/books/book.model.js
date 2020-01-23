const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		lowercase: true
	},
	author: {
		type: String,
		required: true,
		lowercase: true
	},
	genre: {
		type: Array,
		required: true,
		lowercase: true
	},
	status: {
		type: String,
		required: true,
		lowercase: true,
		default: 'not read'
	},
	series: {
		type: String,
		lowercase: true
	}
})

const Book = mongoose.model('Book', schema)

exports.create = (book) => {
	let newBook = new Book(book)
	return newBook.save()
}

exports.remove = (id) => {
	Book.deleteOne({ _id: id }, (book, err) => { 
		if(err) { return err } 
		return book
	})
}

exports.view = (id) => {
	return new Promise((resovle, reject) => {
		Book.findById(id, (book, err) => {
			if(err) reject(err)
			resovle(book)
		})
	})
}
// module.exports = Book