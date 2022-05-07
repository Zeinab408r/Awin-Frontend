import { useEffect } from 'react';
import './Category.css';

const Filter = ({ result, setCategory, setFiltered, category ,carousel,setWidth}) => {
  useEffect(() => {
    if (category === 3) {
      setFiltered(result);
      return;
    }
    const filtered = result.filter(
      (item) => item.likes % 2 === category
    );
    console.log(filtered);
    setFiltered(filtered);
    // console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
    //   setWidth(
    //     carousel.current.scrollWidth - carousel.current.offsetWidth
    //   );
  }, [category]);
  return (
    <div className="parentDiv">
      <div className="nav">
        <ul>
          <li>
            <button
              className="text-button"
              onClick={() => setCategory(3)}
            >
              Featured
            </button>
          </li>
          <li>
            <button
              className="text-button"
              onClick={() => setCategory(0)}
            >
              Followed
            </button>
          </li>
          <li>
            <button
              className="text-button"
              onClick={() => setCategory(1)}
            >
              New
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
