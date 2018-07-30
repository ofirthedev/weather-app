import React, { Component } from 'react';
import Card from '../../components/UI/Card/Card';

import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';
import './Forecast.css'
import Grid from '@material-ui/core/Grid';



class Forecast extends Component  {

  state={

    loading:false,
    location:'',
    country:'',
    population:'',
    forecast: [],
  };
  componentDidMount(){
    this.setState({loading:true});
    const where = this.props.where;
    let forecastArr =[];
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+where+'&appid=92b2e95f7a2f24edf67358d0af949f85&units=metric')
    .then((res) => {
      res.data.list.map((weather) =>{
        forecastArr.push(weather);
      });


      this.setState({
          
          location: res.data.city.name ,
          country:res.data.city.country,
          population:res.data.city.population,
          forecast: forecastArr,
        });
        return axios.get('https://restcountries.eu/rest/v2/alpha/'+res.data.city.country+'?fields=flag');
      })
    .then((res2) => {
      
      this.setState({flag: res2.data.flag,loading:false});
    })
    .catch((err) => {
      this.setState({loading:false});

    })

    }

     

  render() {
    let cardRender = <Spinner/>

    let forecastMap = this.state.forecast;

    if(!this.state.loading && this.state.location !== '')
    {

  cardRender = forecastMap.map((content) => {
      // map content to html elements
      return ( 
        <Grid item xs>
      <Card  key={content.dt_txt}
      location={this.state.location}
      country={this.state.country}
      temp={content.main.temp}
      humidity={content.main.humidity}
      description={content.weather[0].description}
      flag={this.state.flag}
      icon={content.weather[0].icon}
      date={content.dt_txt}
      />
      </Grid>);
 

  });
  return <div style={{textAlign:'center'}}>{cardRender}</div>;
    }
    if(!this.state.loading && this.state.location === '')
    {
       cardRender = 'WOOOPSS!! CITY NOT FOUND !';

    }

    return(

        <div style={{display: 'inline-block'}} >       
        <Grid container spacing={24}>{cardRender}</Grid>
             </div>
    );
  }
}

export default Forecast;
