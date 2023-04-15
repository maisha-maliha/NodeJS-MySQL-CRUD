CREATE DATABASE UserProfile;
use UserProfile;
CREATE TABLE BlogPost(
postID int NOT NULL,
title varchar(255),
content varchar(1000),
personame varchar(255) ,
mail varchar(225)
);
-- alter table BlogPost ADD mail varchar (255); -- adding a new column 
-- alter table BlogPost ADD personame varchar (225);
insert into blogpost (postID, title, content, personame, mail) values (1, "how to cook biriyani", "i love biriyani and there are many ways to cook biriyani. my favourit is chicken biryani. hope you love it. i love it too.","maisha", "mail@mail.com");
-- ALTER TABLE blogpost DROP COLUMN ID;  -- deleting a column
select * from blogpost;
-- delete from blogpost where personame = "maisha"; -- deleteing row from database
-- DROP TABLE userinfo;
-- UPDATE blogpost SET title = "new title", content = "new content", personame ="maisha" mail = "mail@mail.com" WHERE postID = '1';
-- UPDATE blogpost SET title = "helo" WHERE personname = "maisha";