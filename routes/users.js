// mongodb instll
// install mongoosejs
// require and setup conection
// make schema
// create model and export

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice") //db create

// create schema
const userschema = mongoose.Schema({ //documnet data
  username: String,
  name:String,
  age:Number
})

module.exports = mongoose.model("user",userschema);     //user is model==collection name


