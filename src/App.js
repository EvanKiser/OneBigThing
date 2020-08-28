import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskInfo from './TaskInfo';
import Header from './Header';
import Footer from './Footer';
import DateInfo from './DateInfo';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Evan" />
      <DateInfo />
      <TaskInfo />
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}
