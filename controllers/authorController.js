//link to author model
const authors = require('../models/author')

//handle the request to get all authors
const getAllAuthors = (req,res)=>{
    res.send(authors) //send list to browser
}

//Function to handle a request to a particular author
const getAuthorByID = (req,res)=>{
    //search for author in the database via ID
    const author = authors.find(author=>author.id === req.params.id)
    if (author){
        res.send(author)
    }
    else{
        res.send('nothing is here')
    }
}
module.exports = {
    getAllAuthors,
    getAuthorByID
}