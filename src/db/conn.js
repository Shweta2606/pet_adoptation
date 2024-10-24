const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;


const MONGODB_URI = process.env.ATLAS_URI

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://sam:sarim@cluster0.6mcgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connected to db");
}).catch(()=>{
    console.log("db not connected");
})


