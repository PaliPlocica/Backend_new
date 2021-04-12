const express = require('express')
const routerBook = express.Router()

const helper = require('../helper')
const validation = require('../validation')

routerBook.route('/book').post(async (req, res) => {
	const data = helper.loadDbdata()
	const nextId = data.length
	const reqBody = req.body
	const isValid = validation.isValidBook(reqBody)
	if (isValid) {
		try {
			data.push({ ...reqBody, id: nextId })
			helper.saveDBdata(data)
			res.status(200).send(reqBody)
		} catch (err) {
			res.status(500).send(err)
		}
	} else {
		res.status(405).send('New book not valid')
	}
})

module.exports = routerBook
