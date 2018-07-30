// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import SecurityIcon from '@material-ui/icons/Security';
import InfoIcon from '@material-ui/icons/Info';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


export const mailFolderListItems = (
  <div>
  <NavLink  style={{textDecoration:'none'}}  to="/">
    <ListItem button>
      <ListItemIcon>
      <HomeIcon/>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    </NavLink>
    <NavLink style={{textDecoration:'none'}} to="/auth">
    <ListItem button>
      <ListItemIcon>
      <SecurityIcon/>
      </ListItemIcon>
      <ListItemText primary="Login / Register" />
    </ListItem>
    </NavLink>
    <ListItem button>
      <ListItemIcon>
        <ContactIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <InfoIcon/>
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
   
  </div>
);