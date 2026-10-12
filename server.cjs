const http=require('http'),fs=require('fs'),path=require('path');const root=__dirname;http.createServer((req,res)=>{let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end();return}let file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return}res.setHeader('Content-Type',({'html':'text/html','js':'text/javascript','css':'text/css','svg':'image/svg+xml'})[path.extname(file).slice(1)]||'application/octet-stream');res.end(data)})}).listen(4190,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4190'));



