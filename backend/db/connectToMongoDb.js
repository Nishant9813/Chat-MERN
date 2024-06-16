import mongoose from "mongoose";

const connectToMongoDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("mongoose connected succesfully")
    } catch (error) {
        console.log("Error connencting to mongodb",error.message)
    }
}

export default connectToMongoDB;