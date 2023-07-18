import { useEffect } from "react";

function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.post_id}>
          <h1>{post.post_title}</h1>
          <p>{post.created_at}</p>
          <p>{post.blog_post}</p>
        </div>
      ))}
    </>
  );
}

export default Posts;
