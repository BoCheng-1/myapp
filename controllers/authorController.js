const mongoose = require ("mongoose")

const Author = mongoose.model("Author")

const getAllAuthors = async (req,res) => {
    try {
        const authors = await Author.find()
        return res.send(authors)
    } catch (err) {
        res.status (404)
        return res,send("Database query failed")
    }
} 


const getOneAuthor = async(req,res)=>{
    try{
        const oneAuthor = await Author.findOne({"authorID":req.params.id})
            if (oneAuthor === null){
                res.status(400)
                return res.send("Author not found")
            }
            return res.send(oneAuthor)
    } catch (err){
        res.status(400)
        return res.send("Database query failed")
    }
}

module.exports = {
    getAllAuthors,
    getOneAuthor
}