const express = require("express");
const app=express();
const router=require("./src/Routes/api");
require('dotenv').config();

app.use("/api",router);
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})

module.exports=app;