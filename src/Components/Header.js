import React, { Component } from 'react'
import {AppBar, Toolbar, Box, Button, Typography} from '@material-ui/core';

export class Header extends Component {
  render() {
    return (
      <div>
          <AppBar position="static">
            <Toolbar style={{display:'flex', justifyContent:"space-between"}}>
            <Typography variant="h5" component="h2">
              Purple
            </Typography>
              <Box>
                <Button color="secondary" variant="contained">Connect Wallet</Button>
              </Box>
            </Toolbar>
          </AppBar>
      </div>
    )
  }
}

export default Header