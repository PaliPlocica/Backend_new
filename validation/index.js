const Joi = require('joi')

const bookSchema = Joi.object({
	title: Joi.string().required(),
	author: Joi.string().required(),
	pages: Joi.number().required(),
	tags: Joi.array().items(Joi.string()),
})

const isValidBook = book => (bookSchema.validate(book).error ? false : true)

const isValidId = id => !/^[0-9]+$/.test(id)

module.exports = {
	bookSchema,
	isValidBook,
	isValidId,
}
