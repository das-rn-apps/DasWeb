import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    projectDetailsId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProjectDetails' },
    name: { type: String, required: true },
    message: { type: String, required: true },
    email: { type: String }
}, {
    timestamps: true
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;