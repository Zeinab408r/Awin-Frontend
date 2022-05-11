import React, { useState } from 'react';
import './SubCategory.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './SubCategory.css';
import GetProduct from './GetProduct';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: '5em',
    textTransform: 'lowercase',
  },
  input: {
    display: 'none',
  },
}));

const FilterProduct = () => {
  const classes = useStyles();

  const [categoryNumber, setCategoryNumber] = useState(1);

  return (
    <>
    

      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="default"
          onClick={() => setCategoryNumber(1)}
        >
          All
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => setCategoryNumber(1)}
        >
          oven
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => setCategoryNumber(2)}
        >
          women clothes
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => setCategoryNumber(3)}
        >
          men clothes
        </Button>
      </div>
      <GetProduct CategoryNumber={CategoryNumber}/>
    </>
  );
};

export default FilterProduct;
