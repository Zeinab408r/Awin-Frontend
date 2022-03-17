import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./Category.css"

const ShowData = ({ item }) => {
  return (
    <div>
      <motion.div className="item">
        <img src={item.img} alt="" width="250" height="250" />
      </motion.div>
    </div>
  );
};
export default ShowData;
