import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
      <div>
          <AppBar color='primary'> 
              <Toolbar>
          <Typography variant="h5">Home</Typography>&nbsp;
          <Link to="/login">
            <Button variant="contained" color='error' >login</Button>&nbsp;
          </Link>
          <Link to="/signup">
            <Button variant="contained" color='error' >signup</Button>&nbsp;
          </Link>
          <Link to="/tab">
            <Button variant="contained" color='error' >list</Button>&nbsp;
            </Link>
              </Toolbar>
          </AppBar>
          <br /><br /><br />
          
    </div>
  )
}
