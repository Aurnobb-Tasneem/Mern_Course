const  express=require("express");
const app=new express();
app.listen(3000,function(){
    console.log('Listening on port 3000');
});
app.get('/success',(req, res)=>{

    res.status(200);
    res.send("Its a success!");
    res.end();
})
app.get('/notfound',(req, res)=>{

    res.status(404);
   res.send("404 No Data");
    res.end();
})