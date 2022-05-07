import { img } from "./SubCategoryData";
import { useState, useEffect, useRef } from "react";
import Image from "./Image";
import Filter from "./Filter";
import { motion } from "framer-motion";

const SubCategory = () => {
  const [image, setImage] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState(0);
  
  useEffect(() => {
    setImage(img);
    setFiltered(img);
  }, []);
  

  return (
    <div>
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
            return <Image key={index} item={item} />;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SubCategory;
