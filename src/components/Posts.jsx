import { useEffect } from "react";

function Posts({ posts }) {
  //  const id = posts.post_id;
  //   const getComments = async () => (
  //       const res = await fetch(`http://localhost:4000/blog_posts/${id}/comments`)
  //       const data
  //   )

  //   useEffect(() => {

  //   })

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
