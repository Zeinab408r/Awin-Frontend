import { useEffect } from "react";
import "./Category.css";

const Filter = ({ image, setCategory, setFiltered, category }) => {
  useEffect(() => {
    if (category === 0) {
      setFiltered(image);
      return;
    }
    const filtered = image.filter((item) => item.id === category);

    setFiltered(filtered);
  }, [category]);
  return (
    <div className="parentDiv">
      <div className="nav">
        <ul>
          <li>
            <button className="text-button" onClick={() => setCategory(0)}>
              Featured
            </button>
          </li>
          <li>
            <button className="text-button" onClick={() => setCategory(1)}>
              Followed
            </button>
          </li>
          <li>
            <button className="text-button" onClick={() => setCategory(3)}>
              New
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
