-- 3- find the name of all authors who have 0 articles
use newsp;

select author.name 
from author
left join author_article on author.id= author_article.author_id
where author_id is null