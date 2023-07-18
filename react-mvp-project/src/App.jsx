import { useState, useEffect } from "react";
import Posts from "./components/Posts";

import "./App.css";

function App() {
  const [blogPost, setBlogPost] = useState([]);

  const getPosts = async () => {
    const res = await fetch("https://react-mvp-app.onrender.com/blog_posts");
    const data = res.json();
    setBlogPost(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 id='randomTxt'>I am working</h1>
      {/* <Posts blogData={blogData} /> */}
      <Posts blogPost={blogPost} />
    </>
  );
}

export default App;
