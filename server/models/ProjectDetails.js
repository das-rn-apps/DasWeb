import mongoose from 'mongoose';

const projectDetailsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    category: String,
    rating: Number,
    technologies: [String],
    link: String,
    image: String,
    screenshots: [String],
    features: [String],
    userFeedback: [{
        text: String,
        author: String
    }]
});

export default mongoose.model('ProjectDetails', projectDetailsSchema);