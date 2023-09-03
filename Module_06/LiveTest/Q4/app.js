const express = require('express');
const app= new express();
app.listen(3000,function(){
    console.log('Listening on port 3000');
});
app.get('/clearcookies',(req, res)=>{

    res.status(200);
    res.clearCookie(name="name",value="JohnDoe")
    res.clearCookie(name="language",value="en")
    res.clearCookie(name="theme",value="dark")
    res.send("Cookies Clear!");
    res.end();
})