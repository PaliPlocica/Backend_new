const fs = require('fs')
const path = require('path')
const resolvePath = inputPath => path.resolve(__dirname, inputPath)
const dataPath = resolvePath('../data/data.json')
const validation = require('../validation')

const loadDbdata = () =>
	JSON.parse(fs.readFileSync(dataPath, 'utf8', (_, dbData) => dbData))

const saveDBdata = data => {
	fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
}

const findBookById = id => loadDbdata().find(book => book['id'] === id)

const updateBook = (idBook, book) => {
	if (!validation.isValidBook(book)) {
		return null
	}
	const data = loadDbdata()
	data[idBook]['title'] = book['title']
	data[idBook]['author'] = book['author']
	data[idBook]['pages'] = book['pages']
	if (book['tags']) {
		data[idBook]['tags'] = book['tags']
	}
	return data[idBook]
}

module.exports = {
	loadDbdata,
	saveDBdata,
	resolvePath,
	findBookById,
	updateBook,
}
