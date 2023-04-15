const http = require('http');
const fs = require('fs');
const database = require('./sources/database');
database.connection.connect();
// SERVER CREATION
http.createServer((req, res)=>{
    //console.log(req.url + " " + req.method);
    // ALL SERVER REQUEST AND RESPONSE
    if(req.method ==='POST' && req.url == '/'){
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
    if(req.method ==='POST' && req.url == '/blogpost'){
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
            console.log(ResponseInfo);
            // SEND DATA ONLY IF ALL INPUTS HAVE VALUE
            if(ResponseInfo.name != '' && ResponseInfo.heading !='' && ResponseInfo.content!=''){
                // UPDATING DATA TO BLOGPOST
                let sq = `UPDATE blogpost SET title = "${ResponseInfo.heading}", content = "${ResponseInfo.content}", personame = "${ResponseInfo.name}" WHERE postID = "${ResponseInfo.id}";`
                database.connection.query(sq, (err, resp)=>{if(err) throw err});
            }
        });
    }
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        let data = fs.readFileSync("./sources/index.html", "utf-8");
        res.end(data);
    }
    if(req.url == '/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        let data = fs.readFileSync("./sources/style.css", "utf-8");
        res.end(data);
    }
    if(req.url == '/data.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./sources/data.js", "utf-8");
        res.end(data);
    }
    if(req.url == '/setdata.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./sources/setdata.js", "utf-8");
        res.end(data);
    }
    if(req.url == '/update.js'){
        res.writeHead(200,{'Content-Type':'text/javascript'});
        let data = fs.readFileSync("./sources/update.js", "utf-8");
        res.end(data);
    }
    if(req.url == '/blogpost'){
        res.writeHead(200,{'Content-Type':'text/html'});
        database.calling(); // UPDATING data.js FILE
        let data = fs.readFileSync("./sources/blogpost.html", "utf-8");
        res.end(data);
    }
}).listen(3000); // CREATED SERVER LISTENTING PORT
// havent closed database connection
