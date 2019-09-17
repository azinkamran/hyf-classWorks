// const http=  require('http');

// const server=http.createServer((req,res)=>{
//     const {url,method}= req;
//     console.log(method,url);
//     res.end('hello!')
// });

// server.listen(3000);

////////////////
//lsiten for url/add
// send the response of 2+3
//otherwise hello

const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(method, url);
  if (url === "/add") {
    res.end("2+3");
  }
  res.end("hello!");
});

server.listen(3000);
