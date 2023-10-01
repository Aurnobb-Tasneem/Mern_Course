const app=require("./App");

let Port=process.env.RUNNING_PORT;
app.listen(Port,()=>{
    console.log(`Server is listening on ${Port}!`)
})