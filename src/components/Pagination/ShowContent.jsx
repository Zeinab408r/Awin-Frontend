import React, { useState, useRef, useCallback } from "react";
import useContentSearch from "./useContentSearch";
import "./Show.css";

export default function ShowContent() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { contents, hasMore, loading, error } = useContentSearch(
    query,
    pageNumber
  );

  const observer = useRef();
  const lastContentElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // function handleSearch(e) {
  //   setQuery(e.target.value);
  //   setPageNumber(1);
  // }

  return (
    <>
      {/* <input type="text" value={query} onChange={handleSearch}></input> */}
      <div className="row">
        {contents.map((content, index) => {
          if (contents.length === index + 1) {
            return (
              <div className="column" ref={lastContentElementRef} key={content}  >
                <img   src={content.urls.thumb} width="250" height="200"/>
                <p className="username"> Photo by {content.user.name}</p>
                
              </div>
            );
          } else {
            return (
              <div className="column" key={content}>
               <img src={content.urls.thumb} width="250" height="200"/>
                <p className="username"> Photo by {content.user.name}</p>
               
              </div>
            );
          }
        })}
      </div>

      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}
