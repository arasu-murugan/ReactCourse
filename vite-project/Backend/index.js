var express = require("express")
var path = require('path')
var mongoose = require('mongoose')
var user = require('./models/users')
var app = express()
const PORT = 3001
app.use(express.json())

mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("MongoDb Connection Successful");
}).catch(() => {
    console.log("Check your Connection String");
})




app.get('/', (req, res) => {
    res.send("Welcome to Backend Server")
})

app.get('/json', (req, res) => {
    res.json({ server: "Welcome to Backend Server", url: "localhost", port: 3001 })
})

app.get('/static', (req, res) => {

    res.sendFile(path.join('c:', 'ReactCourse', 'vite-project', 'index.html'))
})
app.post('/signup',(req, res)=>{
    
    var {firstName,lastName,email} = req.body
    console.log(firstName,lastName,email);
    
    try{
        var newUser = new user({
            firstName:firstName,
            lastName:lastName,
            email:email
        })
        newUser.save()
        console.log("User Added Successfully")
        res.status(200).send("User Added Successfully")

    }
    catch(err){
        console.log(err)

    }

})
app.get('/getsignup',async(req,res)=>{
    try{
        var allsignupRecords =await user.find()
        res.json(allsignupRecords)
        console.log("All Data Fetched");
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})
app.listen(PORT, () => {
    console.log(`Backend server is started\nUrl:http://localhost:${PORT}`)
})



