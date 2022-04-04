import "./Show.css";
import axios from "axios";
import { useState,useEffect } from "react";

import React from "react";

 const Show = () => {
  const [image, setImage] = useState("dog");
  const clientId = "viyDF3eUM7UyGboYfR9ySQN7kxMVGdfngRyqLy5FNdg";
  const [result, setResult] = useState([]);
  useEffect(() => {
    console.log(image);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);})

  }, []);
  return (
    <div className="app">
      {result.map((image) => (
        <>
          <div className="card">
            <img src={image.urls.thumb} />
            <p className="username"> Photo by {image.user.name}</p>
            <p className="like">👍 {image.likes}</p>
          </div>
        </>
      ))}
    </div>
  )
}
export default Show;

