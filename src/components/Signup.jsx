import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const Signup = () => {
  return (
      <div>
          <Typography variant='h3'>signup</Typography><br/>
          <TextField label='username' variant='outlined'/> <br/> <br/>
      <TextField label="password" variant="outlined" type='password' /><br /> <br />
      <Button variant='contained'>submit</Button>
      </div>
  )
}
