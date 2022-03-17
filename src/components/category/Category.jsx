import { img } from "./CategoryData";
import { useState, useEffect } from "react";
import ShowData from "./ShowData.jsx";
import Filter from "./Filter";
import { motion } from "framer-motion";

const Category = () => {
  const [image, setImage] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState(0);
  useEffect(() => {
    setImage(img);
    setFiltered(img);
  }, []);

  return (
    <>
      <Filter
        image={image}
        setFiltered={setFiltered}
        setCategory={setCategory}
        category={category}
      />

      <motion.div className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0 }}
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
