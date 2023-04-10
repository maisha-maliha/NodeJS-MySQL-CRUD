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
ID INT
);
alter table BlogPost ADD content varchar (1000); -- adding a new column 
alter table BlogPost ADD personame varchar (225);
insert into userinfo (PersonName, mail) values ('nei huga','nejihuga@gmail.com');
insert into blogpost (postID, title, content, personame) values (1, "how to cook biriyani", "maisha maliha");
ALTER TABLE blogpost DROP COLUMN ID;  -- deleting a column
select * from userinfo;
select * from blogpost;