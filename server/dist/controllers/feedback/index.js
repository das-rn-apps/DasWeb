"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Feedback_1 = __importDefault(require("../../models/Feedback"));
const mongoose_1 = __importDefault(require("mongoose"));
const FeedbackRouter = (0, express_1.Router)();
FeedbackRouter.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback_1.default.find({ projectDetailsId: null }).sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    }
    catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
});
FeedbackRouter.get('/:id', async (req, res) => {
    try {
        const feedbacks = await Feedback_1.default.find({ projectDetailsId: req.params.id }).sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    }
    catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
});
FeedbackRouter.post('/', async (req, res) => {
    try {
        const feedback = new Feedback_1.default(req.body);
        await feedback.save();
        res.status(201).json({ message: 'Feedback saved successfully' });
    }
    catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Error saving feedback', error: error.message });
    }
});
FeedbackRouter.post('/:id', async (req, res) => {
    try {
        const feedback = new Feedback_1.default({
            ...req.body,
            projectDetailsId: new mongoose_1.default.Types.ObjectId(req.params.id)
        });
        await feedback.save();
        res.status(201).json({ message: 'Feedback saved successfully', feedback });
    }
    catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Error saving feedback', error: error.message });
    }
});
exports.default = FeedbackRouter;
