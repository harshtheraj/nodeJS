// const http=require('http');
// const myServer=http.createServer((req,res)=>{
//     // console.log("new request receive");
//     console.log(req)
//     res.end("hello from server again ");
// });

// myServer.listen(8000,() =>console.log("server started!"))


const http = require('http');
const fs = require('fs');
const url = require('url');

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url} New request received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname) {
            case '/':
                res.end("homepage");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi, ${username} `);
                break; // 💡 THIS BREAK STOPS THE FALL-THROUGH AND CRASH!
            case '/search':
                const search = myUrl.query.search_query;
                res.end("here is your result for " + search);
                break;
            default:
                res.end("404 not found");
        }
    });
});

myserver.listen(8000, () => console.log("started"));