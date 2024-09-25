import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import laundryCompanyRoutes from './routes/laundryCustomerRoutes';
import connectDB from './config/db';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());


connectDB();

// Laundry company routes
app.use('/api/laundry', laundryCompanyRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
