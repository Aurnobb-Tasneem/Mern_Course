const express = require("express");
const app=express();
const router=require("./src/Routes/api");
const bodyParser =require('body-parser');


const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const hpp =require('hpp');
const cors =require('cors');


app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());


require('dotenv').config();

app.use("/api",router);
app.use('*',(req,res)=>{
    res.status(404).json({status:"Fail",data:"Not Found"})
})

module.exports=app;