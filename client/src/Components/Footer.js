import * as React from 'react';
import Typography from '@mui/material/Typography';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Laroussi Aziz Copyright © '}
   
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <footer>
       <Copyright/>
    </footer>
  );
}