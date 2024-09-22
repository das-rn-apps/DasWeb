
import { Router } from 'express';
import Contact from '../../models/Contact.js';

const ContactRouter = Router();

ContactRouter.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).json({ message: 'Contact saved successfully' });
});

ContactRouter.get('/all', async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

export default ContactRouter;


