const http = require('http');
const mysql = require('mysql2');
const fs = require('fs');
require('./database');

// SEND DATA TO DATABSAE
function sendData(name, mail, heading, content){
    // SEND DATA TO USERINFO DATABASE TABLE
    connection.query(`INSET INTO userinfo (PersonName, mail) values (${name},${mail});`);
    // SEND DATA TO BLOGPOST DATABASE TABLE
    connection.query('SELECT COUNT(postID) FROM blogpost;',(err, result, fields)=>{
        let x = result[0]['COUNT(postID)'] + 1;
        connection.query(`INSERT INTO blogpost (postID, title, content, personame) VALUES (${x}, ${heading}, ${content},${name});`);
    });
}
// SERVER CREATION
let server = http.createServer((req, res)=>{
    let ResponseInfo = '';
    // ALL SERVER REQUEST AND RESPONSE
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        let data = fs.readFileSync("./index.html", "utf-8");
        res.end(data);
    }
    if(req.method ==='POST'){
        req.on('data', chunk =>{
            let data, ResponseObj;
            // CONVERTING DATA TO OBJECT
            data = chunk.toString();
            ResponseInfo = data.split("&");
            data ='';
            ResponseObj ='{';
            ResponseInfo.forEach(element => {
                data = element.split("=");
                ResponseObj += `"${data[0]}" : "${data[1]}",`;
            });
            ResponseObj += '"nothing":"nothing"}';
            ResponseInfo = JSON.parse(ResponseObj);

            // SENDING DATA
            sendData(ResponseInfo.name, ResponseInfo.mail, ResponseInfo.heading, ResponseInfo.content);
            res.end(); // RESPONSE ENDING
        });
    }
    if(req.url == '/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        let data = fs.readFileSync("./style.css", "utf-8");
        res.end(data);
    }
    if(req.url == '/getdata.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./getdata.js", "utf-8");
        res.end(data);
    }
    if(req.url == '/data.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./data.js", "utf-8");
        res.end(data);
    }
}).listen(4000); // CREATED SERVER LISTENTING PORT
//connection.end(); // DATABASE CONNECTION END