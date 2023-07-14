import { useState, useEffect } from "react";
import Posts from "./components/Posts";

import "./App.css";

function App() {
  // const [blogData, setBlogData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("./server/server.js/");
  //     const data = await res.json();
  //     setBlogData(data);
  //   };
  //   const [posts, setPosts] = useState([]);
  //   getData();
  // }, []);

  return (
    <>
      <h1 id='randomTxt'>I am working</h1>
      {/* <Posts blogData={blogData} /> */}
      <Posts />
    </>
  );
}

export default App;
