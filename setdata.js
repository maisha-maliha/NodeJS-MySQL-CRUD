import {profile, posts} from './data.js'
let bposts = document.getElementsByClassName('posts')[0];

posts.forEach(element => {
    let post = document.createElement("div");
    post.className = 'post';
    let title = document.createElement("h2");
    title.innerHTML =  element.title;
    let content = document.createElement("p");
    content.innerHTML = element.content;
    let author = document.createElement("b");
    author.innerHTML = element.personame;
    post.appendChild(title);
    post.appendChild(author);
    post.appendChild(content);
    bposts.appendChild(post);
});
console.log(posts);
