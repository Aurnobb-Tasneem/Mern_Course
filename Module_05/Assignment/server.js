const http= require("http");
const fs = require("fs");
//1.
const app=http.createServer(
    function (req, res){
        //4.
        if(req.url=="/"){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end("This is Home Page");
        }
        //5.
        else if(req.url=="/about"){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end("This is About Page");
        }
        //6.
        else if(req.url=="/contact"){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end("This is Contact Page");
        }
        //7.
        else if(req.url=="/file-write"){
            fs.writeFile("demo.txt","hello world",(error)=>{
                if(error){
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.write("File Write Failed!")
                    console.log("File Write Failed!");
                  //8.
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

).
    //2.
listen(3000,()=>{
//3.
    console.log("listening on port 3000!")
})
