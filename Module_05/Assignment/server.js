const http= require("http");
const url = require("url");
const fs = require("fs");

const app=http.createServer(
    function (req, res){
        if(req.url=="/"){
            res.end("This is Home Page");
        }
        else if(req.url=="/about"){
            res.end("This is About Page");
        }
        else if(req.url=="/contact"){
            res.end("This is Contact Page");
        }
        else if(req.url=="/file-write"){
            fs.writeFile("demo.txt","hello world",(error)=>{
                if(error){
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.write("File Write Failed!")
                    console.log("File Write Failed!");
                    res.end();
                }
                else{
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.write("File Write Success!")
                    console.log("File Write Success!");
                    res.end();
                }
            });
        }
        else{
            res.end("404 not Found!!!")
        }
    }

).listen(3000,()=>{
    console.log("listening on port 3000!")
})
