import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './Category.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';  
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ShowData = ({ item }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <motion.div className="item">
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            subheader="September 14, 2016"
          />
          <Link href={item.awin_deep_link} key={item.id}>
            <CardMedia
              className={classes.media}
              image={item.image_url}
              title={item.name}
              
              width="250"
              height="250"
            /> </Link>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              >
                This impressive paella is a perfect party dish and a
                fun meal to cook together with your guests. Add 1 cup
                of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
         
        </Card>
        ;
      </motion.div>
    </div>
  );
};
export default ShowData;

{
  /* <div>
  <motion.div className="item">
    <img src={item.urls.thumb} alt="" width="250" height="250" />
  </motion.div>
</div>; */
}
