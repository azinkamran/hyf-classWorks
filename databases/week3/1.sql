create table `author`(
	`id` int(10) unsigned not null auto_increment,
	`name` varchar(255) not null,
	`phone` varchar(255) null,
	primary key (`id`)
) engine= innodb default charset= utf8mb4 collate=utf8mb4_unicode_ci;
​
create table `article` (
	`id` int(10) unsigned not null auto_increment,
	`title` varchar(255) not null,
	`artical_text` text null default null,
	`date` date not null,
	`category` varchar(255),
	primary key (`id`)
) engine= innodb default charset= utf8mb4 collate=utf8mb4_unicode_ci;
​
create table `author_article` (
	`author_id` int(10) unsigned not null,
	`article_id` int(10) unsigned not null,
	primary key (`author_id`, `article_id`),
	constraint `fk_author_id` foreign key (`author_id`) references `author` (`id`) on delete cascade,
	constraint `fk_article_id` foreign key (`article_id`) references `article` (`id`) on delete cascade
) engine= innodb default charset= utf8mb4 collate=utf8mb4_unicode_ci;
​
SELECT article.title, author.name
FROM article
LEFT JOIN author_article ON article.id = author_article.article_id
LEFT JOIN author ON author.id = author_article.author_id;