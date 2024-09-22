import mongoose from 'mongoose';

const projectDetailsSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    category: String,
    rating: Number,
    technologies: [String],
    link: String,
    downloadLink: String,
    screenshots: [String],
    features: [String]
}, {
    timestamps: true
});
const ProjectDetails = mongoose.model('ProjectDetails', projectDetailsSchema);

export default ProjectDetails;