import { Router } from 'express';
import { createLaundryCompany, getLaundryCompanies, getLaundryCompanyById, updateLaundryCompany, deleteLaundryCompany } from '../controllers/laundryCompanyControllers';

const router: Router = Router();

// Route to create a new laundry company
router.post('/', createLaundryCompany);

// Route to get all laundry companies
router.get('/', getLaundryCompanies);

// Route to get a single laundry company by ID
router.get('/:id', getLaundryCompanyById);

// Route to update a laundry company by ID
router.put('/:id', updateLaundryCompany);

// Route to delete a laundry company by ID
router.delete('/:id', deleteLaundryCompany);

export default router;
