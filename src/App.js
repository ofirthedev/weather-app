import React, { Component } from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from './components/UI/Drawer/Drawer';

import './components/UI/Drawer/Drawer.css';

import Home from './containers/Home/Home';
import Form from './containers/Form/Form';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {withRouter} from 'react-router-dom';



class App extends Component {




  render() {

    return (
      <div className="App">
      <CssBaseline />
      <Drawer>
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Form} />
            {/*<Route exact path="/auth" component={Topics} />
          <Route exact path="/contact" component={Topics} />*/}      
     </Switch>

      </Drawer>

     </div>
   
    );
  }
}

export default withRouter(App);
