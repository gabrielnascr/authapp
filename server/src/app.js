import express from 'express';
import mongoose, { mongo } from "mongoose";
import cors from 'cors';

import 'express-async-errors'
import './passport/google';

import routes from './routes'
import errorHandler from './utils/errors/error-handler';

const app = express();

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(errorHandler)

mongoose.connect('mongodb://localhost:2717/authapp', {
    useNewUrlParser:true, 
    useUnifiedTopology: true,
}).then(() => console.log('Database connected'))

export default app;