const express = require('express')
const app = express();

//set up author routes
const authorRouter = require('./routes/authourRouter')
//go to Hone Page
app.get('/',(req,res) => {
    res.send( '<h1> My app</h1>')
})

app.use('/author-info',authorRouter)

app.listen(process.env.PORT || 3000,()=>{
    console.log('My app is listening on port 3000')
})