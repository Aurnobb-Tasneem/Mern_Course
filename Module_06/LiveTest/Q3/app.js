const express = require('express');
const app= new express();
app.listen(3000,function(){
    console.log('Listening on port 3000');
});
app.get('/',(req, res)=>{

    res.status(200);
    res.cookie(name="name",value="JohnDoe")
    res.cookie(name="language",value="en")
    res.cookie(name="theme",value="dark")
    res.send("Cookie set!");
    res.end();
})