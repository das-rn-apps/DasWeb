"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectDetails_1 = __importDefault(require("../../models/ProjectDetails"));
const ProjectDetailsRouter = (0, express_1.Router)();
ProjectDetailsRouter.get('/', async (req, res) => {
    try {
        const projectDetails = await ProjectDetails_1.default.find().sort({ createdAt: -1 });
        res.status(200).json(projectDetails);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching project details', error: error.message });
    }
});
ProjectDetailsRouter.get('/:id', (req, res) => {
    ProjectDetails_1.default.findById(req.params.id)
        .then((projectDetails) => {
        if (!projectDetails) {
            return res.status(404).json({ message: 'Project details not found' });
        }
        res.status(200).json(projectDetails);
    })
        .catch((error) => {
        res.status(500).json({ message: 'Error fetching project details', error: error.message });
    });
});
ProjectDetailsRouter.post('/', (req, res) => {
    const projectDetails = new ProjectDetails_1.default(req.body);
    projectDetails.save()
        .then(() => {
        res.status(201).json({ message: 'Project details saved successfully', projectDetails });
    })
        .catch((error) => {
        res.status(400).json({ message: 'Error saving project details', error: error.message });
    });
});
ProjectDetailsRouter.put('/:id', (req, res) => {
    ProjectDetails_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then((updatedProjectDetails) => {
        if (!updatedProjectDetails) {
            return res.status(404).json({ message: 'Project details not found' });
        }
        res.status(200).json({ message: 'Project details updated successfully', projectDetails: updatedProjectDetails });
    })
        .catch((error) => {
        res.status(400).json({ message: 'Error updating project details', error: error.message });
    });
});
ProjectDetailsRouter.delete('/:id', (req, res) => {
    ProjectDetails_1.default.findByIdAndDelete(req.params.id)
        .then((deletedProjectDetails) => {
        if (!deletedProjectDetails) {
            return res.status(404).json({ message: 'Project details not found' });
        }
        res.status(200).json({ message: 'Project details deleted successfully' });
    })
        .catch((error) => {
        res.status(500).json({ message: 'Error deleting project details', error: error.message });
    });
});
exports.default = ProjectDetailsRouter;
