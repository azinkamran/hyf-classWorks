-- 2- find  the name of all authors who have articles in more than 1 cageories

use newsp;

select author.name , count(category_article.category_id)
from author
join author_article on author.id= author_article.author_id
join article on article.id= author_article.article_id
join category_article on article.id= category_article.article_id
join category on category.id= category_article.category_id
group by author.name , category_article.category_id
having	count(category_article.category_id)>1