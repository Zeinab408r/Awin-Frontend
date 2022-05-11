import React from 'react';
import './SubCategory.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShowProduct from './ShowProduct';

const GetProduct = ({ categoryNumber }) => {
  const [error, setError] = useState(false);
  const [contents, setContents] = useState([]);

  // useEffect(() => {
  //   setContents([]);
  // }, [query]);

  useEffect(() => {
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://project1.safe-stream.com/api/product/',

      params: { category: categoryNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res);
        setContents(res.data.results);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [categoryNumber]);

  return (
    <>
       <motion.div  className="carousel" >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0 }}
          className="inner-carousel"
        >
          {contents.map((item, index) => {
            return <ShowProduct key={index} item={item} />;
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default GetProduct;
