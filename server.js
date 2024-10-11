import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import dataRouter from './routes/data.routes.js';

dotenv.config();

// Initialize express instance
const app = express();

// Middleware 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS dependencies
const corsOptions = {
    origin: "*", // * for development purpose, replace with actual URL in production
    methods: "GET, PUT, POST, DELETE",
    credentials: true,
    allowedHeaders: ['Content-Type'],  
};

app.use(cors(corsOptions));
app.options('*', cors());

// API Routing
app.use('/', dataRouter);

// Connect with MONGODB ATLAS database
try {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        app.listen(process.env.PORT, () => {  
            console.log('Server running on port ' + process.env.PORT);
        });
    }).catch((error) => {
        console.log('Server could not be started: ' + error.message);  
    });
} catch (error) {
    console.log('Something went wrong: ' + error.message);
}
