import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import axios from "axios";

import "./App.css";

function App() {
  const [blogData, setBlogData] = useState([]);

  const blogPath = "https://react-mvp-app.onrender.com/";

  axios.defaults.validateStatus = (status) => {
    return status < 500;
  };

  const getData = async () => {
    const res = await axios.get(blogPath);
    setBlogData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 id='randomTxt'>I am working</h1>
      <Posts blogData={blogData} />
      {/* <Posts /> */}
    </>
  );
}

export default App;
