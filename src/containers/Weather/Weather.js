import React, { Component } from 'react';
import './Weather.css';
import Card from '../../components/UI/Card/Card';
import './Weather.css'

import axios from 'axios';



class Weather extends Component  {

  state={

    location:'',
    temp:'',
    humidity: '',
    description:'',
    country:'',
  };
  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Haifa&appid=92b2e95f7a2f24edf67358d0af949f85&units=metric')
    .then((res) => {
      this.setState({
          location: res.data.name ,
          temp:res.data.main.temp ,
          humidity: res.data.main.humidity,
          description: res.data.weather[0].description,
          country: res.data.sys.country,
        });
      console.log(res.data);
    })

    }



  render() {


    return(
        
        <div className="card">
          
        <Card 
        location={this.state.location}
        temp={this.state.temp}
        humidity={this.state.humidity}
        description={this.state.description}
        country={this.state.country}
        
        />
        </div>
    );
  }
}

export default Weather;
