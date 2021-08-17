require('dotenv').config()
const mongoose = require("mongoose")

// Connect to MongoDB - database login is retrieved from environment variables - YOU SHOULD USE YOUR OWN ATLAS CLUSTER
CONNECTION_STRING = "mongodb+srv://bo:304068@cluster0.sgaws.mongodb.net/IT?retryWrites=true&w=majority"
MONGO_URL = CONNECTION_STRING.replace("chebc@student.unimelb.edu.au",process.env.MONGO_USERNAME).replace("qqq789www=",process.env.MONGO_PASSWORD)

mongoose.connect(MONGO_URL || "mongodb://localhost", { useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false,
dbName: "IT" 
})

const db = mongoose.connection

db.on("error", err => { 
    console.error(err); process.exit(1)
})
db.once("open", async () => {
console.log("Mongo connection started on " + db.host + ":" + db.port)
}) 

require("./author")