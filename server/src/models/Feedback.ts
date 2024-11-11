import mongoose, { Schema, Document } from 'mongoose';

export interface IFeedback extends Document {
    name: string;
    message: string;
    projectDetailsId: mongoose.Types.ObjectId;
    email?: string;
    createdAt: Date;
    updatedAt: Date;
}

const feedbackSchema: Schema<IFeedback> = new Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    projectDetailsId: { type: Schema.Types.ObjectId, ref: 'ProjectDetails' },
    email: { type: String }
}, {
    timestamps: true
});

const Feedback = mongoose.model<IFeedback>('Feedback', feedbackSchema);

export default Feedback;