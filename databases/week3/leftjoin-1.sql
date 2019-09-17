use news;

select article.title , author.name
from article
left join author_article on article.id = author_article.article_id
left join author on author_article.author_id;