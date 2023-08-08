import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CodeIcon from '@mui/icons-material/Code';
import VideocamIcon from '@mui/icons-material/Videocam';
import './SideBar.scss'

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <div style={{ display: 'flex' , position:"absolute", top:"40px", zIndex:-1}}>
      <Drawer
        variant="permanent"
        className='drawer'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        anchor="left"
        style={{backgroundColor:"#1C1B23"}}
      >
        {/* <Toolbar /> */}
        <List className='drawer'>
          <ListItem className='drawer-item' >
            <ListItemIcon>
              <HomeIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem className='drawer-item' >
            <ListItemIcon>
              <WhatshotIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary="Trending" />
          </ListItem>
          <ListItem className='drawer-item'>
            <ListItemIcon>
              <CodeIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary="Snippets" />
          </ListItem>
          <ListItem className='drawer-item'>
            <ListItemIcon>
              <VideocamIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
