-- db name is react-mvp-app

DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- blog posts table
CREATE TABLE blog_posts (
post_id SERIAL PRIMARY KEY,
post_title VARCHAR(50),
blog_post TEXT
);

-- user table
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
user_name VARCHAR(50),
user_email TEXT
);

-- comments table
CREATE TABLE comments (
comment_id SERIAL PRIMARY KEY,
comment_body VARCHAR(150),
);

--seed data into blog posts
INSERT INTO blog_posts (post_id, post_title, blog_post)
VALUES
  (1, 'Introduction', 'Get to know me');

--seed data into user table
INSERT INTO blog_posts (user_id, user_name, user_email)
VALUES
  (1, 'example-name', 'example@gmail.com');

--seed data into comments
INSERT INTO blog_posts (post_id, post_title, blog_post)
VALUES
  (1, 'Simple introduction for me as a software engineer');