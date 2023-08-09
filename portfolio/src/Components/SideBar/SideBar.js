import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CodeIcon from '@mui/icons-material/Code';
import VideocamIcon from '@mui/icons-material/Videocam';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './SideBar.scss'

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <div style={{ position:"relative", zIndex: -1}}>
      <Drawer
        variant="permanent"
        className='drawer'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: "#1C1B23 !important",
          },
        }}
      >
        {/* <Toolbar /> */}
        <div className="pt-5">
        <List className="drawer pt-5">
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
          <ListItem className='drawer-item'>
            <ListItemText primary="Socials" className="font-weight-bold"/>
          </ListItem>
          <ListItem className='drawer-item'>
            <ListItemIcon>
              <InstagramIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem className='drawer-item'>
            <ListItemIcon>
              <GitHubIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
          <ListItem className='drawer-item'>
            <ListItemIcon>
              <YouTubeIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary="Youtube" />
          </ListItem>
          <ListItem className='drawer-item'>
            <ListItemIcon>
              <LinkedInIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
        </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
