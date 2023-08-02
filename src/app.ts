import express, { Express } from 'express';
import bodyParser from 'body-parser';
import notesRouter from './routes/notes.route';
import statsRouter from './routes/stats.route';

const app: Express = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use(notesRouter);
app.use(statsRouter);

export default app;
