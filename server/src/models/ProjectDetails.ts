import mongoose, { Schema, Document } from 'mongoose';

export interface IProjectDetails extends Document {
    name: string;
    image: string;
    description: string;
    category: string;
    rating: number;
    technologies: string[];
    link: string;
    downloadLink: string;
    screenshots: string[];
    features: string[];
    createdAt: Date;
    updatedAt: Date;
}

const projectDetailsSchema: Schema<IProjectDetails> = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    technologies: [{ type: String, required: true }],
    link: { type: String, required: true },
    downloadLink: { type: String, required: true },
    screenshots: [{ type: String, required: true }],
    features: [{ type: String, required: true }]
}, {
    timestamps: true
});

const ProjectDetails = mongoose.model<IProjectDetails>('ProjectDetails', projectDetailsSchema);

export default ProjectDetails;