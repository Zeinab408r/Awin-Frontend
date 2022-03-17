import "./SubCategory.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Image = ({ item }) => {
  return (
    <div>
      <motion.div className="item">
        <img src={item.img} alt="" width="250" height="250" />
      </motion.div>
    </div>
  );
};

export default Image;
