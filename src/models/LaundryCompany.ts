import mongoose, { Schema, Document } from 'mongoose';

export interface IPrices {
  shirt: number;
  trouser: number;
  bedsheet: number;
  suit: number;
}

export interface ILaundryCompany extends Document {
  name: string;
  address: string;
  phone: string;
  rating: number;
  location: {
    longitude: number;
    latitude: number;
  };
  prices: IPrices;
  opening_hours: string;
  special_services: string[];
}

const LaundryCompanySchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  rating: { type: Number, required: true },
  location: {
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
  },
  prices: {
    shirt: { type: Number, required: true },
    trouser: { type: Number, required: true },
    bedsheet: { type: Number, required: true },
    suit: { type: Number, required: true },
  },
  opening_hours: { type: String, required: true },
  special_services: { type: [String], required: true },
});

export default mongoose.model<ILaundryCompany>('LaundryCompany', LaundryCompanySchema);
