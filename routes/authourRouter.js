const express = require ('express')

//add router
const authorRouter = express.Router()

//require the author controller 
const authorController = require('../controllers/authorController.js')

//handle the GET request to get all authors
authorRouter.get('/',authorController.getAllAuthors)

//handle the search ID request
authorRouter.get('/:id',authorController.getAuthorByID)

//export the router
module.exports = authorRouter