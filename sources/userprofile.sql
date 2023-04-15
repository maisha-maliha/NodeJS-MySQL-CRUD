CREATE DATABASE UserProfile;
use UserProfile;
CREATE TABLE UserInfo(
ID int NOT NULL auto_increment,
PersonName varchar(255) NOT NULL,
mail varchar(255),
PRIMARY KEY (ID)
);
CREATE TABLE BlogPost(
postID int NOT NULL,
title varchar(255),
content varchar(1000),
personame varchar(255) 
);
-- alter table BlogPost ADD content varchar (1000); -- adding a new column 
-- alter table BlogPost ADD personame varchar (225);
insert into userinfo (PersonName, mail) values ('nei huga','nejihuga@gmail.com'); -- inserting data to the table
insert into blogpost (postID, title, content, personame) values (1, "how to cook biriyani", "i love biriyani and there are many ways to cook biriyani. my favourit is chicken biryani. hope you love it. i love it too.","maisha maliha");
-- ALTER TABLE blogpost DROP COLUMN ID;  -- deleting a column
select * from userinfo;
select * from blogpost;
delete from blogpost where personame = "Maisha"; -- deleteing row from database
delete from userinfo where personname="Maisha";