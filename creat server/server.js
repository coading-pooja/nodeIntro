const http = require('http');

const Server = http.createServer((req,res)=>{
    res.write("pooja Agarwal")
    res.end()
});
Server.listen(3000);

