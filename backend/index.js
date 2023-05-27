const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRouter = require('./routes/user');
const shareRouter = require('./routes/share');
const stockRouter = require('./routes/stock');
dotenv.config();

connectDB();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());

app.use('/user',userRouter);
app.use('/stock', stockRouter );
app.use('/share', shareRouter);

app.listen(5000,()=>{
    console.log("Backend up and running");
})