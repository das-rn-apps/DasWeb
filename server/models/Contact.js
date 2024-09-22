import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    message: {
        type: String,
        required: true
    }
});

export default mongoose.model('Contact', contactSchema);

