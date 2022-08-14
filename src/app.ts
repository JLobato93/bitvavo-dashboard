import express from 'express';
import { MainRouter } from './api';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', MainRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
