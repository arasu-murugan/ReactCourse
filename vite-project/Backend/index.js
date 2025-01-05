var express = require("express")
var path = require('path')
var cors = require('cors')
var mongoose = require('mongoose')
var user = require('./models/users')
var app = express()
var env = require('dotenv')
const PORT = 3001
env.config()
app.use(express.json())

mongoose.connect("mongodb+srv://arasumurugan1903:Arasu1903@@mernkec2025.r1loe.mongodb.net/kongu").then(() => {
    console.log(process.env.MONGO_URL)
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
    
    var {firstName,lastName,email,password} = req.body
    console.log(firstName,lastName,email,password);
    
    try{
        var newUser = new user({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
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
    app.post('/login',async(req,res)=>{
        var {email,password} = req.body
        try{
            var existingUser =await user.findOne({email:email})
            if(existingUser){
                if(existingUser.password !== password) {
                    res.json({message:"Invalid Credentials",isloggedIN:false})
                
                }
            else{
            
            res.json({message:"Login Successful",isloggedIN:true})
            }
                }
            else{
                res.json({message:"User Not Found",isloggedIN:false})
            }
        }
        
        catch(err){
            console.log("Login Failed")
        }
    })

app.listen(PORT, () => {
    console.log(`Backend server is started\nUrl:http://localhost:${PORT}`)
})



