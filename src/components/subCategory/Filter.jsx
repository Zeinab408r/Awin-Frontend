import { useEffect } from "react";
import "./SubCategory.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: "5em",
    textTransform: "lowercase",
  },
  input: {
    display: "none",
  },
}));
const Filter = ({ image, setCategory, setFiltered, category }) => {
  const classes = useStyles();
  useEffect(() => {
    if (category === 0) {
      setFiltered(image);
      return;
    }
    const filtered = image.filter((item) => item.id === category);

    setFiltered(filtered);
  }, [category]);
  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="white"
        onClick={() => setCategory(0)}
      >
        All
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => setCategory(1)}
      >
        People
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => setCategory(2)}
      >
        Animal
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => setCategory(3)}
      >
        food
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => setCategory(4)}
      >
        Plant
      </Button>
    </div>
  );
};

export default Filter;
