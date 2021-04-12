const express = require('express')
const routerBook = express.Router()

const helper = require('../helper')

routerBook.route('/book/tags').get(async (_, res) => {
	try {
		const data = helper.loadDbdata()
		data
			.map(book => book['tags'])
			.flat()
			.reduce((accumulator, currentValue) => {
				return accumulator.some(accTag => accTag === currentValue)
					? accumulator
					: [...accumulator, currentValue]
			}, [])
		res.status(200).send(data)
	} catch (err) {
		res.status(500).send(err)
	}
})

module.exports = routerBook
