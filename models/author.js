const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    authorID :String,
    last_name :String,
    first_name : String
})

const Author = mongoose.model("Author", authorSchema)

module.exports = Author
