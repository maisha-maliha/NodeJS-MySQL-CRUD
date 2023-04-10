const mysql = require('mysql2'); // MYSQL 2 not MYSQL
const fs = require('fs');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test123',
  database : 'UserProfile'
});
connection.connect();

// GET DATA FROM USERINFO TABLE
var userinfo = 'let profile = [';
connection.query('SELECT * FROM userinfo;', function (error, results, fields) {
  if (error) throw error;
  results.forEach(element => {
    userinfo += '{ id : "'+element.ID+'",'+ 'name: "'+element.PersonName+'", '+'email: "'+element.mail+'"},';
  });
  userinfo += '];';
  console.log(userinfo);
  fs.writeFile('./data.js',userinfo, err =>{if(err) console.log(err)});
});

// GET DATA FROM BLOGPOST TABLE
connection.query('SELECT * FROM blogpost', (err, result, fields)=>{
  if (err) throw err;
  userinfo = ' let posts = [';
  result.forEach(element => {
    userinfo += '{ postid : "'+element.postID+'",'+ 'title: "'+element.title+'", '+'content: "'+element.content+'", '+'personame: "' + element.personame + '"},';
  });
  userinfo += ']; export {profile, posts};'
  console.log(userinfo);
  fs.appendFile("./data.js", userinfo, (err) => {if (err) console.log(err)});});
connection.end();