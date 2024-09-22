
import { Router } from 'express';
import Contact from '../../models/Contact.js';

const ContactRouter = Router();

ContactRouter.post('/', async (req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ message: 'Contact saved successfully' });
});

ContactRouter.get('/all', async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

export default ContactRouter;


