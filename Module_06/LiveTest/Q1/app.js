const express = require('express');
const app= new express();
app.listen(3000,function(){
    console.log('Listening on port 3000');
});
app.get('/data',(req, res)=>{

    res.status(200);
    res.send("Hello, Express JS!");
    res.end();
})