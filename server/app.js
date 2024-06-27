import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/bankRoutes.js';
import {connectDB} from './config/dbConfig.js'

const App= express();
// mongo Cridition
const mongo = "mongodb+srv://reactDataBase:akash1234@todoapp.hjbu7lk.mongodb.net/"

// CORS Policy
App.use(cors());


// USE
App.use(express.json());

// Load Routes
App.use('/api/bank', routes);
connectDB(mongo);



App.get('/',(req, res)=>{
    res.status(200).json("<h1>This is Home</h1>")
})



const PORT = 4500
App.listen(PORT ,()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})