const http = require('http');
const fs = require('fs');
const database = require('./database');

// SERVER CREATION
http.createServer((req, res)=>{
    // ALL SERVER REQUEST AND RESPONSE
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        let data = fs.readFileSync("./index.html", "utf-8");
        res.end(data);
    }
    if(req.method ==='POST' && req.url == '/'){
        console.log(req.url + ' ' + req.method);
        database.connection;
        let ResponseInfo = '';
        req.on('data', chunk =>{
            let data, ResponseObj;
            // CONVERTING DATA TO OBJECT
            data = chunk.toString();
            ResponseInfo = data.split("&");
            data ='';
            ResponseObj ='{';
            ResponseInfo.forEach(element => {
                data = element.split("=");
                ResponseObj += `"${data[0]}" : "${data[1].split('+').join(' ')}",`;
            });
            ResponseObj += '"nothing":"nothing"}';
            ResponseInfo = JSON.parse(ResponseObj);
            // SEND DATA ONLY IF ALL INPUTS HAVE VALUE
            if(ResponseInfo.name != '' && ResponseInfo.mail != "" && ResponseInfo.heading !='' && ResponseInfo.content!=''){
                // SENDING DATA TO USERINFO
                database.connection.query(`insert into userinfo (PersonName, mail) values ("${ResponseInfo.name}", "${ResponseInfo.mail}")`, (err, resp)=>{
                    if(err) throw err;
                });
                // COUNTING TOTAL ROWS IN BLOGPOST
                database.connection.query('SELECT COUNT(postID) FROM blogpost', (err,resp)=>{
                    if (err) throw err
                    // SEND DATA TO BLOGPOST TALBLE
                    database.connection.query( `insert into blogpost (postID, title, content, personame) values ( ${resp[0]['COUNT(postID)']+1},"${ResponseInfo.heading}", "${ResponseInfo.content}", "${ResponseInfo.name}")`, (err, res)=>{
                        if(err) throw err;
                    });
                });
            }
        });
    }
    if(req.url == '/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        let data = fs.readFileSync("./style.css", "utf-8");
        res.end(data);
    }
    if(req.url == '/data.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./data.js", "utf-8");
        res.end(data);
    }
    if(req.url == '/setdata.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./setdata.js", "utf-8");
        res.end(data);
    }
    if(req.url == '/blogpost'){
        res.writeHead(200,{'Content-Type':'text/html'});
        database.calling(); // UPDATING data.js FILE
        let data = fs.readFileSync("./blogpost.html", "utf-8");
        res.end(data);
    }
}).listen(3000); // CREATED SERVER LISTENTING PORT
