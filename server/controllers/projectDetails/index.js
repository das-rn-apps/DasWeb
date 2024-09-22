import { Router } from 'express';
import ProjectDetails from '../../models/ProjectDetails.js';

const ProjectDetailsRouter = Router();

ProjectDetailsRouter.get('/', async (req, res) => {
    try {
        const projectDetails = await ProjectDetails.find().sort({ createdAt: -1 });
        res.status(200).json(projectDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project details', error: error.message });
    }
});

ProjectDetailsRouter.get('/:id', async (req, res) => {
    try {
        const projectDetails = await ProjectDetails.findById(req.params.id);
        if (!projectDetails) {
            return res.status(404).json({ message: 'Project details not found' });
        }
        res.status(200).json(projectDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project details', error: error.message });
    }
});

ProjectDetailsRouter.post('/', async (req, res) => {
    try {
        const projectDetails = new ProjectDetails(req.body);
        await projectDetails.save();
        res.status(201).json({ message: 'Project details saved successfully', projectDetails });
    } catch (error) {
        res.status(400).json({ message: 'Error saving project details', error: error.message });
    }
});

ProjectDetailsRouter.put('/:id', async (req, res) => {
    try {
        const updatedProjectDetails = await ProjectDetails.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProjectDetails) {
            return res.status(404).json({ message: 'Project details not found' });
        }
        res.status(200).json({ message: 'Project details updated successfully', projectDetails: updatedProjectDetails });
    } catch (error) {
        res.status(400).json({ message: 'Error updating project details', error: error.message });
    }
});

ProjectDetailsRouter.delete('/:id', async (req, res) => {
    try {
        const deletedProjectDetails = await ProjectDetails.findByIdAndDelete(req.params.id);
        if (!deletedProjectDetails) {
            return res.status(404).json({ message: 'Project details not found' });
        }
        res.status(200).json({ message: 'Project details deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project details', error: error.message });
    }
});

export default ProjectDetailsRouter;
