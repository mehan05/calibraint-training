const mongoose = require("mongoose");


async function connectDB(){
    try {
       let db =  await mongoose.connect(process.env.MONGO_URI);
        if(db){
            return "DB connected successfully";
        }
    } catch (error) {
        return "DB connection failed";
    }
}


module.exports = connectDB;