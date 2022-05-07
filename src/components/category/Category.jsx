import { img } from './CategoryData';
import { useState, useEffect, useRef } from 'react';
import ShowData from './ShowData.jsx';
import Filter from './Filter';
import { motion } from 'framer-motion';
import axios from 'axios';

const Category = () => {
  const [width, setWidth] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState(3);
  const clientId = 'viyDF3eUM7UyGboYfR9ySQN7kxMVGdfngRyqLy5FNdg';
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);
  const carousel = useRef();

  const url =
    'https://api.unsplash.com/search/photos?page=1&query=' +
    'flower' +
    '&client_id=' +
    clientId;
  useEffect(() => {
    getData();
    fechData();

  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
      setWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth
      );
    }, 1000);
  }, []);

  const getData = async () => {
    await axios
      .get(url)
      .then((response) => {
        console.log(response);
        setResult(response.data.results);
        setFiltered(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fechData = async () => {
    await axios
      .get("product/")
      .then((response) => {
        console.log(response);
        //setData(response);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <>
      <Filter
      setWidth={setWidth}
        carousel={carousel}
        result={result}
        setFiltered={setFiltered}
        setCategory={setCategory}
        category={category}
      />

      <motion.div ref={carousel} className="carousel" whileTap={{cursor :"grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0 ,left:-width}}
          className="inner-carousel"
        >
          {filtered.map((item, index) => {
            return <ShowData key={index} item={item} />;
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Category;
