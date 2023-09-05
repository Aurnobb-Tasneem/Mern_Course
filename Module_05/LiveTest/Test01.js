const http= require("http");

const app=http.createServer(
    (req, res)=> {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Welcome to the Simple HTTP Server!");
    })
app.listen(8080 ,()=>{
    console.log("listening on port 8080 !")
})
