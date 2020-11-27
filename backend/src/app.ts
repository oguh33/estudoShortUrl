import express from 'express';
import linksRouter from './routers/links';
import Cors from 'cors';

const app = express();
app.use(express.json());
app.use(Cors);
app.use(linksRouter);

export default app;