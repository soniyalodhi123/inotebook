const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo = async ()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("connected to mongo Successfull");
    }catch(error){
        console.log("Mongo connection error;", error);
    }
    
   
}

module.exports = connectToMongo;