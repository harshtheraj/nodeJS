const fs=require('fs')

//sync // it alwasy return 
//fs.writeFileSync('./test.txt','hey there!')

//Async //it not return it expect callback function 
//fs.writeFile("./test.txt","hello world",(err)=>{})

// const result=fs.readFileSync('./contact.txt',"utf-8");
// console.log(result)

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("ERROR",err)
//     }else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("./test.txt",new Date().toISOString())

// fs.appendFileSync("./test.txt",Date.now() + 'hey there\n')

// fs.cpSync("./contact.txt","./copy.text")

// fs.mkdirSync("my-docs")

// fs.mkdirSync("my-docs/a/b",{recursive:true})




// how nodejs working
// ans- user's send the request then the request reach to the event queue and and the event queue is monitor by the event loop then it will the request type if the request type is non blocking operation means asyn operation then simple it will process the request and send the response and if the request is blocking means synscronous then it will go to the thread pool where it will request will taken by the thread and one thread complete the request then it will return the result 

// default thread pool size is 4 
// max? depend on cpu size if 8 core processor then you can make 8 thread max 
const os = require('os')
console.log(os.cpus().length)

// -----------------------------------------------
// console.log("1")
// // blocking
// const result = fs.readFileSync('contact.txt',"utf-8")
// console.log(result)

// console.log('2')

// -----------------------------------------------------------


// console.log("1")
// // non - blocking
// fs.readFile('contact.txt',"utf-8",(err,result)=>{
//     console.log(result)
// })


// console.log('2')

// --------------------------------------------------------

