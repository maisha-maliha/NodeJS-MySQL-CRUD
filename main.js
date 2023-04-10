const http = require('http');
const fs = require('fs');
const mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test123',
  database : 'UserProfile'
});
connection.connect();

let profileInfo = '';
let server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        let data = fs.readFileSync("./index.html", "utf-8");
        res.end(data);
    }
    if(req.method ==='POST'){
        req.on('data', chunk =>{
            let data, profileObj;
            data = chunk.toString();
            profileInfo = data.split("&");
            data ='';
            profileObj ='{';
            profileInfo.forEach(element => {
                data = element.split("=");
                profileObj += `"${data[0]}" : "${data[1]}",`;
            });
            profileObj[profileObj.length-1] = " ";
            profileObj += '"nothing":"nothing"}';
            console.log(JSON.parse(profileObj));
            res.end();
        });
    }
    if(req.url == '/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        let data = fs.readFileSync("./style.css", "utf-8");
        res.end(data);
    }
    console.log(req.method);
});
server.listen(3000);
connection.end();