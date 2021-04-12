const express = require('express')
const routerBook = express.Router()

const helper = require('../helper')

routerBook.route('/book').get(async (_, res) => {
	try {
		const data = helper.loadDbdata()
		res.status(200).send(data)
	} catch (err) {
		res.status(500).send(err)
	}
})

module.exports = routerBook
