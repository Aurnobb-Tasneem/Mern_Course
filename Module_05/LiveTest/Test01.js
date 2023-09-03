const http= require("http");

const app=http.createServer(
    (req, res)=> {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Hello This is Node Js Server!");
    })
app.listen(5500,()=>{
    console.log("listening on port 5500 !")
})