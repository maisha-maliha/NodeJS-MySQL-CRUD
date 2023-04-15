// this file creates every post element  
// and sets data and also add events and handles events

import {profile, posts} from './data.js';
let bposts = document.getElementsByClassName('posts')[0];
let form_title = document.querySelectorAll('#title')[0];
let form_content = document.querySelectorAll('#content')[0];
let form_name = document.querySelectorAll('#name')[0];

// CREATING POST ELEMENTS
for(let i = 0 ; i < posts.length; i++){
    let element = posts[i];
    console.log("element created");
    let post = document.createElement("div");
    post.className = 'post';
    let title = document.createElement("h2");
    title.innerHTML =  element.title;
    let content = document.createElement("p");
    content.innerHTML = element.content;
    let author = document.createElement("b");
    author.innerHTML = element.personame;
    let editbtn = document.createElement("button");
    editbtn.innerHTML = "EDIT";
    editbtn.addEventListener('click',()=>{
        let form = document.createElement("form");
        form.method = 'post';
        form.target = '_self';
        // HIDE ALL POST INFO
        title.style.display = 'none';
        content.style.display = 'none';
        author.style.display = 'none';
        title.style.display = 'none';
        editbtn.style.display = 'none';
        // EDIT TITLE
        let input_id = document.createElement("input");
        input_id.name = "id";
        input_id.type = "text";
        input_id.value = element.postid;
        input_id.readOnly = true;
        // EDIT TITLE
        let input_title = document.createElement("input");
        input_title.name = "heading";
        input_title.type = "text";
        input_title.value = element.title;
        // EDIT CONTENT
        let input_content = document.createElement("input");
        input_content.name = "content";
        input_content.type = "text";
        input_content.value = element.content;
        // EDIT AUTHORNAME
        let input_name = document.createElement("input");
        input_name.name = "name";
        input_name.type = "text";
        input_name.value = element.personame;

        // UPDATE BUTTON
        let updatebtn = document.createElement("button");
        updatebtn.type = "submit";
        updatebtn.innerHTML = "UPDATE";
        let deletebtn = document.createElement("button");
        deletebtn.type = "submit";
        deletebtn.innerHTML = "DELTE";
        form.appendChild(input_id);
        form.appendChild(input_name);
        form.appendChild(input_title);
        form.appendChild(input_content);
        form.appendChild(updatebtn);
        form.appendChild(deletebtn);
        post.appendChild(form);
    });
    post.appendChild(title);
    post.appendChild(author);
    post.appendChild(content);
    post.appendChild(editbtn);
    bposts.appendChild(post);

};
