import { useState, useEffect } from "react";
import Posts from "./components/Posts";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch("http://localhost:4000/blog_posts");
    const data = await res.json();
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  // const id = posts.post_id;
  // const getComments = async () => (
  //     const res = await fetch(`http://localhost:4000/blog_posts/${id}/comments`)
  //     const data
  // )

  // useEffect(() => {

  // })

  return (
    <>
      <h1 id='randomTxt'>I am working</h1>
      {/* <Posts blogData={blogData} /> */}
      <Posts posts={posts} />
    </>
  );
}

export default App;
