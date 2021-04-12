const express = require('express')
const routerBook = express.Router()

const helper = require('../helper')
const validation = require('../validation')

routerBook.route('/book:bookId').get(async (req, res) => {
	if (validation.isValidId(req.params.bookId)) {
		res.status(400).send('Invalid ID format supplied')
		return
	}
	const book = helper.findBookById(+req.params.bookId)
	if (book) {
		res.status(200).send(book)
	} else {
		res.status(404).send('Book not found')
	}
})

module.exports = routerBook
