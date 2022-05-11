import React from 'react';

import './SubCategory.css';
import { motion } from 'framer-motion';

//  import GetProduct from './GetProduct';
const ShowProduct = ({ item }) => {
  return (
    <div>
      <motion.div className="item">
        <img src={item.image_url} alt="" width="250" height="250" />
      </motion.div>
    </div>
  );
};

export default ShowProduct;
