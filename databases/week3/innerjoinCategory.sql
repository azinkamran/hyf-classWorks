use news;

SELECT article.title, author.name, category.name
FROM category
INNER JOIN category_article ON category.id = category_article.category_id
INNER JOIN article ON article.id = category_article.article_id
INNER JOIN author_article ON article.id = author_article.article_id
INNER JOIN author ON author.id = author_article.author_id;