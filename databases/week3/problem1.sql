-- 1- find the name of all authors that have written more than 2 articles as well as how many 
-- 					articles they have written

use newsp;

SELECT author.name,
	COUNT(aa.article_id)
FROM author 
JOIN author_article as aa
ON author.id = aa.author_id
group by aa.author_id
having count(aa.article_id) > 2;