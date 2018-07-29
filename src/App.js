import React, { Component } from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from './components/UI/Drawer/Drawer';

import './components/UI/Drawer/Drawer.css';
import Button from '@material-ui/core/Button';
import Weather from './containers/Weather/Weather';

class App extends Component {
  state = {
    inputText : '',

  };

onInputChanged = (event) => {
  this.setState({inputText : event.target.value});

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
      <div className="App">
      <CssBaseline />
      <Drawer >

      <p> 
      <input className="inputstyle"  type="text" value={this.state.inputText} onChange={this.onInputChanged}  placeholder="Ex: Haifa"/>
      </p>

       <p>
       <Button disabled={!this.state.inputText} variant="contained" style={buttonStyle}>
             {buttonText}
       </Button> 

          </p>
        <Weather/>
        </Drawer>
    
      </div>
    );
  }
}

export default App;
