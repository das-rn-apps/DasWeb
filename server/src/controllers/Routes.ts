import { Router } from 'express';

import ProjectDetailsRouter from './projectDetails';
import FeedbackRouter from './feedback';

const ApiRouter: Router = Router();

ApiRouter.use("/project", ProjectDetailsRouter);
ApiRouter.use("/feedback", FeedbackRouter);

export default ApiRouter;
