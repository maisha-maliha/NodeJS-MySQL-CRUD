const mysql = require('mysql2'); // MYSQL 2 not MYSQL
const fs = require('fs');
var connection = mysql.createConnection({
  host     : 'localhost', // here you set your website name
  user     : 'root', // your database username
  password : 'test123', // your database passwordname
  database : 'UserProfile' // database that you want to work with
});
connection.connect();

function calling(){
  // GET DATA FROM BLOGPOST TABLE
  connection.query('SELECT * FROM blogpost', (err, result, fields)=>{
    if (err) throw err;
    userinfo = ' let posts = [';
    result.forEach(element => {
      userinfo += '{ postid : "'+element.postID+'",'+ 'title: "'+element.title+'", '+'content: "'+element.content+'", '+'personame: "' + element.personame + '", '+ 'mail: "' + element.mail +' "},';
    });
    userinfo += ']; export {posts};'
    // CREATE AND WRITE IN A FILE THE DATABASE DATA
    fs.writeFile("./sources/data.js", userinfo, (err) => {if (err) console.log(err)});
  });
}
calling(); // callig it once so data.js file created 
module.exports = {calling : calling, connection : connection};