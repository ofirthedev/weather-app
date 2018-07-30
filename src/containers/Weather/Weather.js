import React, { Component } from 'react';
import Card from '../../components/UI/Card/Card';
import './Weather.css'

import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';



class Weather extends Component  {

  state={

    loading:false,
    location:'',
    temp:'',
    humidity: '',
    description:'',
    country:'',
    icon:'',
    date: '',
  };
  componentDidMount(){
    this.setState({loading:true});
    const where = this.props.where;

    axios.get('http://api.openweathermap.org/data/2.5/weather?q='+where+'&appid=92b2e95f7a2f24edf67358d0af949f85&units=metric')
    .then((res) => {
      console.log(res.data);

      this.setState({
          
          location: res.data.name ,
          temp:res.data.main.temp ,
          humidity: res.data.main.humidity,
          description: res.data.weather[0].description,
          country: res.data.sys.country,
          icon:res.data.weather[0].icon,
          date: new Date().toLocaleString(),
        });
        return axios.get('https://restcountries.eu/rest/v2/alpha/'+res.data.sys.country+'?fields=flag');
      })
    .then((res2) => {
      
      this.setState({flag: res2.data.flag,loading:false});
    })
    .catch((err) => {
      this.setState({loading:false});

    });

    }



  render() {
    let cardRender = <Spinner/>

    if(!this.state.loading)
    {
      cardRender = (
        <Card 
        location={this.state.location}
        temp={this.state.temp}
        humidity={this.state.humidity}
        description={this.state.description}
        country={this.state.country}
        flag={this.state.flag}
        icon={this.state.icon}
        date={this.state.date}
        />
      );
    }   
    return(
        
        <div className="card">
          {cardRender}
      
        </div>
    );
  }
}

export default Weather;
