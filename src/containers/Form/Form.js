import React, { Component } from 'react';
import './Form.css';




class Form extends Component {


onSubmitForm = (e) =>{
  e.preventDefault();
}

  render() {

    return (
      <div class="login">
      <div class="login-triangle"></div>
      
      <h2 class="login-header">Log in</h2>
    
      <form class="login-container">
        <p><input type="email" placeholder="Email"/></p>
        <p><input type="password" placeholder="Password"/></p>
        <p><input onClick={this.onSubmitForm} type="submit" value="Log in"/></p>
      </form>
    </div>
   
    );
  }
}

export default Form;
