// this file creates every post element and sets data
// edit data or delete data function added here.

import {posts} from './data.js';
let bposts = document.getElementsByClassName('posts')[0];

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
    let mail = document.createElement("i");
    mail.innerHTML = element.mail;
    let editbtn = document.createElement("button");
    editbtn.innerHTML = "EDIT";

    // EDIT YOUR POST DATA OR DELETE
    editbtn.addEventListener('click',()=>{
    /*******************************************************************************
     we are creating a form here to update all the data and send a post request.
     this form will send the form data and in main.js we will catch the 
     data and update it in database.
    ****************************************************************************** */

        // CREATE FORM
        let form = document.createElement("form");
        form.method = 'post';
        form.action = "/update";
        // HIDE ALL POST INFO
        title.style.display = 'none';
        content.style.display = 'none';
        author.style.display = 'none';
        title.style.display = 'none';
        editbtn.style.display = 'none';
        mail.style.display = 'none';

        // SHOW ID
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
        // EDIT MAIL
        let input_mail = document.createElement("input");
        input_mail.name = "mail";
        input_mail.type = "email";
        input_mail.value = element.mail;
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
        // DELETE BUTTON
        let deletebtn = document.createElement("button");
        deletebtn.type = "submit";
        deletebtn.innerHTML = "DELTE";
        deletebtn.name = "remove";
        deletebtn.value = "false";
        // SENDING SIGNAL TO DELETE POST
        deletebtn.addEventListener('click', ()=>{
            deletebtn.value = "true";
        });

        // APPENDING FORM TO POST
        form.appendChild(input_id);
        form.appendChild(input_name);
        form.appendChild(input_mail);
        form.appendChild(input_title);
        form.appendChild(input_content);
        form.appendChild(updatebtn);
        form.appendChild(deletebtn);
        post.appendChild(form);
    });
    // APPENIGN POST TO POSTS LIST
    post.appendChild(title);
    post.appendChild(author);
    post.appendChild(mail);
    post.appendChild(content);
    post.appendChild(editbtn);
    bposts.appendChild(post);

};
