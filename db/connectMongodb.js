const mongoose = require('mongoose');

const connectToMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB"); 
        
        // Define your models here. 
        
    } catch (error) {
        console.log("Error connecting to mongoDB",error.message);
        
    }
}

module.exports = connectToMongoDB;