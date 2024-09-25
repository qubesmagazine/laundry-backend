"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLaundryCompany = exports.updateLaundryCompany = exports.getLaundryCompanyById = exports.getLaundryCompanies = exports.createLaundryCompany = void 0;
const LaundryCompany_1 = __importDefault(require("../models/LaundryCompany"));
// Create a new laundry company
const createLaundryCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newLaundryCompany = new LaundryCompany_1.default(req.body);
        const savedCompany = yield newLaundryCompany.save();
        res.status(201).json(savedCompany);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating laundry company', error });
    }
});
exports.createLaundryCompany = createLaundryCompany;
// Get all laundry companies
const getLaundryCompanies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companies = yield LaundryCompany_1.default.find();
        res.status(200).json(companies);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving laundry companies', error });
    }
});
exports.getLaundryCompanies = getLaundryCompanies;
// Get a single laundry company by ID
const getLaundryCompanyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield LaundryCompany_1.default.findById(req.params.id);
        if (company) {
            res.status(200).json(company);
        }
        else {
            res.status(404).json({ message: 'Laundry company not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving laundry company', error });
    }
});
exports.getLaundryCompanyById = getLaundryCompanyById;
// Update a laundry company by ID
const updateLaundryCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCompany = yield LaundryCompany_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedCompany) {
            res.status(200).json(updatedCompany);
        }
        else {
            res.status(404).json({ message: 'Laundry company not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating laundry company', error });
    }
});
exports.updateLaundryCompany = updateLaundryCompany;
// Delete a laundry company by ID
const deleteLaundryCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCompany = yield LaundryCompany_1.default.findByIdAndDelete(req.params.id);
        if (deletedCompany) {
            res.status(200).json({ message: 'Laundry company deleted' });
        }
        else {
            res.status(404).json({ message: 'Laundry company not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting laundry company', error });
    }
});
exports.deleteLaundryCompany = deleteLaundryCompany;
