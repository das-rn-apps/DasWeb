import { Router, Request, Response } from 'express';
import ProjectDetails, { IProjectDetails } from '../../models/ProjectDetails';

const ProjectDetailsRouter: Router = Router();

ProjectDetailsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const projectDetails: IProjectDetails[] = await ProjectDetails.find().sort({ createdAt: -1 });
        res.status(200).json(projectDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project details', error: (error as Error).message });
    }
});

ProjectDetailsRouter.get('/:id', (req: Request, res: Response) => {
    ProjectDetails.findById(req.params.id)
        .then((projectDetails: IProjectDetails | null) => {
            if (!projectDetails) {
                return res.status(404).json({ message: 'Project details not found' });
            }
            res.status(200).json(projectDetails);
        })
        .catch((error: Error) => {
            res.status(500).json({ message: 'Error fetching project details', error: error.message });
        });
});

ProjectDetailsRouter.post('/', (req: Request, res: Response) => {
    const projectDetails: IProjectDetails = new ProjectDetails(req.body);
    projectDetails.save()
        .then(() => {
            res.status(201).json({ message: 'Project details saved successfully', projectDetails });
        })
        .catch((error: Error) => {
            res.status(400).json({ message: 'Error saving project details', error: error.message });
        });
});

ProjectDetailsRouter.put('/:id', (req: Request, res: Response) => {
    ProjectDetails.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedProjectDetails: IProjectDetails | null) => {
            if (!updatedProjectDetails) {
                return res.status(404).json({ message: 'Project details not found' });
            }
            res.status(200).json({ message: 'Project details updated successfully', projectDetails: updatedProjectDetails });
        })
        .catch((error: Error) => {
            res.status(400).json({ message: 'Error updating project details', error: error.message });
        });
});

ProjectDetailsRouter.delete('/:id', (req: Request, res: Response) => {
    ProjectDetails.findByIdAndDelete(req.params.id)
        .then((deletedProjectDetails: IProjectDetails | null) => {
            if (!deletedProjectDetails) {
                return res.status(404).json({ message: 'Project details not found' });
            }
            res.status(200).json({ message: 'Project details deleted successfully' });
        })
        .catch((error: Error) => {
            res.status(500).json({ message: 'Error deleting project details', error: error.message });
        });
});

export default ProjectDetailsRouter;
