import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb+srv://username:<password>@cluster0.0pipu.mongodb.net/laundryapp";
    
    // Connecting to MongoDB
    const conn = await mongoose.connect(mongoURI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    // Type assertion for err as Error to access message property
    console.error(`Error: ${(err as Error).message}`);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
