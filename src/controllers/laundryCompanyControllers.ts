import { Request, Response } from 'express';
import LaundryCompany, { ILaundryCompany } from '../models/LaundryCompany';

// Create a new laundry company
export const createLaundryCompany = async (req: Request, res: Response) => {
  try {
    const newLaundryCompany = new LaundryCompany(req.body);
    const savedCompany = await newLaundryCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error creating laundry company', error });
  }
};

// Get all laundry companies
export const getLaundryCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await LaundryCompany.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving laundry companies', error });
  }
};

// Get a single laundry company by ID
export const getLaundryCompanyById = async (req: Request, res: Response) => {
  try {
    const company = await LaundryCompany.findById(req.params.id);
    if (company) {
      res.status(200).json(company);
    } else {
      res.status(404).json({ message: 'Laundry company not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving laundry company', error });
  }
};

// Update a laundry company by ID
export const updateLaundryCompany = async (req: Request, res: Response) => {
  try {
    const updatedCompany = await LaundryCompany.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedCompany) {
      res.status(200).json(updatedCompany);
    } else {
      res.status(404).json({ message: 'Laundry company not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating laundry company', error });
  }
};

// Delete a laundry company by ID
export const deleteLaundryCompany = async (req: Request, res: Response) => {
  try {
    const deletedCompany = await LaundryCompany.findByIdAndDelete(req.params.id);
    if (deletedCompany) {
      res.status(200).json({ message: 'Laundry company deleted' });
    } else {
      res.status(404).json({ message: 'Laundry company not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting laundry company', error });
  }
};
