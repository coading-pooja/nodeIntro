const http = require("http");
const server = http.createServer((req,res)=>{
      res.write("pooja goyal")
      res.end()
});
server.listen(3000)

