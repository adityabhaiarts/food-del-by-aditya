import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://artfuladitya:adityaarts332@cluster0.qoemunn.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}