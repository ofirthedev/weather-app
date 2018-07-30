import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 250,
    height:270,
    display: 'inline-block',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
function SimpleCard(props) {
  const { classes } = props;

  let cardRender = 'WOOOPSSS... CITY NOT FOUND!';
  const iconURL= `http://openweathermap.org/img/w/${props.icon}.png`;
  if(props.location !== ''){
    cardRender = (
     
          <Card className={classes.card}>
          <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          {props.location}
          <div>
          <img alt="icon" src={iconURL} />
          </div>
          </Typography>
          <Typography component="p">
          <div><strong>Date : </strong> {props.date}</div>
          <div><strong>Temp : </strong> {props.temp}</div>
          <div><strong> Humidity : </strong> {props.humidity}</div>
          <div><strong> Description : </strong> {props.description}</div>
        <div><strong>  Country : </strong> {props.country}</div>
          </Typography>
        </CardContent>

              </Card>
    );
  }
  return (
    <div>
    {cardRender}
    </div>
  );
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);