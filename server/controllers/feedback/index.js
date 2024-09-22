import { Router } from 'express';
import Feedback from '../../models/Feedback.js';

const FeedbackRouter = Router();

FeedbackRouter.post('/', async (req, res) => {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(200).json({ message: 'Feedback saved successfully' });
});

FeedbackRouter.get('/profile', async (req, res) => {
    const feedbacks = await Feedback.find({ projectDetailsId: null }).sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
});

FeedbackRouter.get('/project/:id', async (req, res) => {
    const feedbacks = await Feedback.find({ projectDetailsId: req.params.id }).sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
});


export default FeedbackRouter;
