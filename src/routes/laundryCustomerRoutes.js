"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const laundryCompanyControllers_1 = require("../controllers/laundryCompanyControllers");
const router = (0, express_1.Router)();
// Route to create a new laundry company
router.post('/', laundryCompanyControllers_1.createLaundryCompany);
// Route to get all laundry companies
router.get('/', laundryCompanyControllers_1.getLaundryCompanies);
// Route to get a single laundry company by ID
router.get('/:id', laundryCompanyControllers_1.getLaundryCompanyById);
// Route to update a laundry company by ID
router.put('/:id', laundryCompanyControllers_1.updateLaundryCompany);
// Route to delete a laundry company by ID
router.delete('/:id', laundryCompanyControllers_1.deleteLaundryCompany);
exports.default = router;
