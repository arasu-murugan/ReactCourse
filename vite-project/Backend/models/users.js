var mongoose = require('mongoose')
var userSchema =mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String
}) 
var user_schema = mongoose.model("users", userSchema)
module.exports = user_schema
