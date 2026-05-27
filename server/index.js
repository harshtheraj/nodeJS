// const http=require('http');
// const myServer=http.createServer((req,res)=>{
//     // console.log("new request receive");
//     console.log(req)
//     res.end("hello from server again ");
// });

// myServer.listen(8000,() =>console.log("server started!"))


const http=require('http')
const fs=require('fs');

const myserver=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url} New request recive\n`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case'/':res.end("homepage")
            break
            case'/about':res.end("i m harsh")
            break
            default:
                res.end("404 not found")
        }
    })
    
})
myserver.listen(8000,()=>console.log("started"))
