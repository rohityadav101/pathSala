import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    drawerBox: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  mainDrawer:{
    "& .MuiDrawer-paper":{
        background:"#1D5EF4 !important"

    }
  }
});

export default function PhoneNav({setState,state , toggleDrawer }) {
  const classes = useStyles();
  return (
    <Box className={classes.mainDrawer}> 
    
          <Drawer  open={state} onClose={toggleDrawer(false)}>
          <Box ml={1} mt={2} className={classes.drawerBox}>
          <img src="images/mycare.png" width="90%" alt="logo" />
          <Box>
            <Button className="sidebarButton">Home</Button>
            <Button className="sidebarButton1">profile</Button>
          </Box>
        </Box>
          </Drawer>
       
    </Box>
  );
}
