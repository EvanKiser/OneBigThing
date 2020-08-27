import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Blog from './Blog/Blog';
import Header from './Blog/Header';
import Footer from './Footer';
import DateInfo from './DateInfo';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} 

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Evan" sections={[{title: 'Technology', url: '#' }]} />
      <DateInfo />
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}
