import { Router, Request, Response } from 'express';
import Feedback, { IFeedback } from '../../models/Feedback';
import mongoose from 'mongoose';

const FeedbackRouter = Router();

FeedbackRouter.get('/', async (req: Request, res: Response) => {
    try {
        const feedbacks: IFeedback[] = await Feedback.find({ projectDetailsId: null }).sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ message: 'Error fetching feedback', error: (error as Error).message });
    }
});

FeedbackRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const feedbacks: IFeedback[] = await Feedback.find({ projectDetailsId: req.params.id }).sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ message: 'Error fetching feedback', error: (error as Error).message });
    }
});

FeedbackRouter.post('/', async (req: Request, res: Response) => {
    try {
        const feedback: IFeedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json({ message: 'Feedback saved successfully' });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Error saving feedback', error: (error as Error).message });
    }
});

FeedbackRouter.post('/:id', async (req: Request, res: Response) => {
    try {
        const feedback: IFeedback = new Feedback({
            ...req.body,
            projectDetailsId: new mongoose.Types.ObjectId(req.params.id)
        });
        await feedback.save();
        res.status(201).json({ message: 'Feedback saved successfully', feedback });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Error saving feedback', error: (error as Error).message });
    }
});

export default FeedbackRouter;
