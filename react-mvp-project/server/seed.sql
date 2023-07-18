-- db name is react-mvp-app
--migrate with \i ./seed.sql


DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- blog posts table
CREATE TABLE blog_posts (
post_id SERIAL PRIMARY KEY,
post_title VARCHAR(50),
blog_post TEXT,
created_at TIMESTAMP DEFAULT NOW()
);

-- user table
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
user_name VARCHAR(50),
user_email TEXT
);

-- comments table
-- CREATE TABLE comments (
-- comment_id SERIAL PRIMARY KEY,
-- comment_body VARCHAR(150),
-- post_id SERIAL,
-- FOREIGN KEY (post_id) REFERENCES blog_posts(post_id),
-- user_id SERIAL,
-- FOREIGN KEY (user_id) REFERENCES users(user_id), 
-- UNIQUE (post_id, user_id)
-- );

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  comment_body VARCHAR(150),
  user_id INT,
  post_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (post_id) REFERENCES blog_posts(post_id)
);

--seed data into blog posts
INSERT INTO blog_posts (post_id, post_title, blog_post, created_at)
VALUES
  (1, 'Introduction', 'Get to know me', CURRENT_TIMESTAMP),
  (2, 'Intro part 2', 'Get to know me part 2', CURRENT_TIMESTAMP);

--seed data into user table
INSERT INTO users (user_id, user_name, user_email)
VALUES
  (1, 'example-name', 'example@gmail.com');

--seed data into comments
INSERT INTO comments (comment_id, comment_body, post_id, user_id)
VALUES
  (1, 'Simple introduction for me as a software engineer', 1, 1);
