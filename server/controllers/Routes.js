import { Router } from 'express';

import ProjectDetailsRouter from './projectDetails/index.js';
import FeedbackRouter from './feedback/index.js';

const ApiRouter = Router();

ApiRouter.use("/project", ProjectDetailsRouter);
ApiRouter.use("/feedback", FeedbackRouter);
export default ApiRouter;
