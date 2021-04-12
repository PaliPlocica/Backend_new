const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const deleteBookById = require('./api/deleteBookById.js')
app.use(deleteBookById)
const getAllBooks = require('./api/getAllBooks.js')
app.use(getAllBooks)
const getBookById = require('./api/getBookById.js')
app.use(getBookById)
const getBookBytags = require('./api/getBookBytags.js')
app.use(getBookBytags)
const postBook = require('./api/postBook.js')
app.use(postBook)
const putBookById = require('./api/putBookById.js')
app.use(putBookById)

app.listen(port, () => console.log(`Server is running with port: ${port}`))
