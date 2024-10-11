import express from 'express';
import { fetchData, uploadData } from '../controller/data.controller.js';

const dataRouter = express.Router();

dataRouter.get('/data', fetchData);
dataRouter.post('/upload', uploadData);

export default dataRouter;
