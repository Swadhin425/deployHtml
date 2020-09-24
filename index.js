const path=require('path');
const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
    fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
        if(err) throw err;
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(content)
       });
}

)

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`Server Running at ${port}`)
});