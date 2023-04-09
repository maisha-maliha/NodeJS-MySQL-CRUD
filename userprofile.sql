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
alter table BlogPost ADD content varchar (1000);
select * from blogpost;