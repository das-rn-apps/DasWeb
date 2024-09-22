import { Router } from 'express';
import Feedback from '../../models/Feedback.js';

const FeedbackRouter = Router();

FeedbackRouter.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ projectDetailsId: null }).sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
});

FeedbackRouter.get('/:id', async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ projectDetailsId: req.params.id }).sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
});

FeedbackRouter.post('/', async (req, res) => {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(200).json({ message: 'Feedback saved successfully' });
});

FeedbackRouter.post('/:id', async (req, res) => {
    const feedback = new Feedback({
        ...req.body,
        projectDetailsId: req.params.id
    });
    try {
        await feedback.save();
        res.status(201).json({ message: 'Feedback saved successfully', feedback });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Error saving feedback', error: error.message });
    }
});




export default FeedbackRouter;
