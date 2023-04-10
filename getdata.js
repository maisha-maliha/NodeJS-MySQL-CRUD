import {profile, posts} from './data.js'
let title = document.getElementsByClassName('title')[0];
let author = document.getElementsByClassName('author')[0];
let mailid = document.getElementsByClassName('mailid')[0];
let contetn = document.getElementsByClassName('content')[0];

posts.forEach(element => {
    title.innerHTML = element.title;
    author.innerHTML = element.personame;
    mailid .innerHTML = element.content
});
console.log(profile);
console.log(posts);