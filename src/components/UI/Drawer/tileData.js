// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import SecurityIcon from '@material-ui/icons/Security';
import InfoIcon from '@material-ui/icons/Info';


export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
      <HomeIcon/>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <SecurityIcon/>
      </ListItemIcon>
      <ListItemText primary="Login / Register" />
    </ListItem>
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