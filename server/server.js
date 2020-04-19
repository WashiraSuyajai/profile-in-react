// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const hostname = "localhost";
// const port = 8081;

// const server = http.createServer((req, res) => {
//   //http://127.0.0.1:8081/home.html
  

//   var q = url.parse(req.url);
  
//   let read = x => {
//     return res.writeHead(x, { "Content-Type": "text/html" });
//   };

//   const write = (data) => {
//     return res.write(data.toString());
//   };

//   const end = () => {
//     return res.end();
//   };

//   console.log(q);

//   if (req.url == "/") {
//     fs.readFile("./home.html", (err, data) => {
//       read(200);
//       write(data);
//       end();
//     });
//   } else {
//     fs.readFile("." + q.pathname, (err, data) => {
//       if (err) {
//         fs.readFile("./404.html", (err, data) => {
//           read(404);
//           write(data);
//           end();
//         });
//       } else {
//         read(200);
//         write(data);
//         end();
//       }
//     });
//   }
// });
// server.listen(port, hostname, () => {
//   console.log(`Server is running at http://${hostname}:${port}/`);
// });
