-- create database news19;
use news19;
-- 
-- CREATE TABLE `author` (
--   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) NOT NULL,
--   `email` varchar(255) NOT NULL,
--   `phone` varchar(255) NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- 
-- CREATE TABLE `article` (
--   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
--   `title` varchar(255) NOT NULL,
--   `article_text` text NULL DEFAULT NULL,
--   `date` DATETIME NOT NULL,
--   `category` text NULL DEFAULT NULL,
--   `author_id` int(10) unsigned NOT NULL,
--   PRIMARY KEY (`id`),
--   CONSTRAINT `fk_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- insert into author values(Null,'azin','azin@yahoo.com','123');
-- insert into author values(Null,'fatemeh','fatemeh@yahoo.com','12663');
-- insert into author values(Null,'ida','ida@yahoo.com','1789');

-- select * from author;

-- insert into article values(null,'aliens invalide','aliens are not true','2019-08-18','news',1);
-- insert into article values(null,'how to learn mysql','you sould study hard','2019-07-02','education',2);
-- insert into article values(null,'how to be hapyy','try to be !!!','2018-10-20','lifestyle',3);

-- select * from article;
-- select * from author;
-- update author set phone=3132 where id =1;
-- select * from author;
-- delete from author where id=3;
-- select * from author;
