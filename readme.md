# SIMPLE NODEJS-MYSQL CRUD
Here I tried making a simple blog using NODEJS and MYSQL. There is no Login. You only create, read, update and delete blog post. NO EXPRESS.JS or any FRAMEWORK my goal was to make a simple website without EXPRESS. Literally no developer know how to do it without EXPRESS.

## Files explained
I have commented on every file but still let me explain what file is doing what.
* main.js - this is the file you are going to run in your terminal.
    `node main.js` Here we handle all the routing and what to show.
* database.js - this file creates a connetion with database and reads database datas and creates a file name data.js.
* data.js - this file will contain all database data in an object.
* setdata.js - this file creates all blogpost elements in the blogpost.html file and also lets edit and delete post. it sends post request with all the updated data.
* index.html - here we create new posts
* blopost.html - here we view, update and delete post.
* update.html -  after updating the post we are directed here in this page.
* userprofile.sql -  i have included the sql file for you to run to create the database i have in my MySQL.
* style.css - the only styling file. 

## 🛠 Skills Need
- Javascript
- HTML
- CSS
- NodeJS ( only used HTTP and FileSystem modules )
- SQL
- MySQL


## Requirements
You must have nodejs installed in your computer. If you don't have it. You should donwload it from [NodeJS](https://nodejs.org/en/download).
To run this project, you will need to add the following packages to your project.

MYSQL2 : `npm install mysql2`


