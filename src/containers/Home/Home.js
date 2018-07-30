import React, { Component } from 'react';
import './Home.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '../../components/UI/Drawer/Drawer';

import Button from '@material-ui/core/Button';
import Weather from '../Weather/Weather';


import { BrowserRouter as Router, Route } from "react-router-dom";



class Home extends Component {
  state = {
    inputText : '',
    isSubmitted: false,

  };

      handleOnInputChanged = (event) => {
        this.setState({inputText : event.target.value});
        if(this.state.isSubmitted){
          this.setState({isSubmitted : false});

        }
      }

      handleOnSubmit = () =>{

        if(!this.state.isSubmitted)

        this.setState({isSubmitted : true});

      }

  render() {
    

    let buttonText = 'Please Enter City';

    if(this.state.inputText !== ''){
        buttonText = 'View Weather For ' + this.state.inputText;
    }
    let buttonStyle = {
    };
    if(this.state.inputText)
    buttonStyle = {
        backgroundColor:'salmon',
        color:'white'
    }

    return (

    
      <div className="Home">
      <CssBaseline />

      <div style={{paddingBottom:'20px'}}> 
      <input
       className="inputstyle"
       type="text"
       value={this.state.inputText} 
       onChange={this.handleOnInputChanged} 
       placeholder="Ex: Haifa"/>
       </div>

      
       <div style={{paddingBottom:'20px'}}>
       <Button 
       onClick={this.handleOnSubmit} 
       disabled={!this.state.inputText} 
       variant="contained" 
       style={buttonStyle}>
             
       {buttonText}
      
       </Button> 
       </div>
       {/*THIS IS WEATHER!*/}
        {/*this.state.isSubmitted ? <Weather where={this.state.inputText}/> : null */} 

      {/*THIS IS FORECAST!*/}
      {this.state.isSubmitted ? <Weather where={this.state.inputText}/> : null } 


      </div>
    );
  }
}

export default Home;
