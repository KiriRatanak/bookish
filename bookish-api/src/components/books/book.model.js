'use strict'

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
	},
	rating: {
		type: Number
	},
	cover: {
		type: String
	},
	lang: {
		type: String,
		required: true,
		default: 'en'
	},
	publisher: {
		type: String,
		lowercasea: true
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

exports.viewOne = (id) => {
	return new Promise((resovle, reject) => {
		let book = Book
			.findById(id)
			.exec((err, book) => {
				if(err) { reject(err) }
				resovle(book)
			})
	})
}

exports.viewPage = (limit, page) => {
	return new Promise((resolve, reject) => {
		Book
			.find()
			.limit(limit)
			.skip(limit * page)
			.exec((err, books) => {
				if(err) { reject(err) }
				resolve(books)
			})
	})
}

exports.viewAll = () => {
	return new Promise((resolve, reject) => {
		Book
			.find((err, books) => {
				if(err) { reject(err) }
				resolve(books)
			})
	})
}

