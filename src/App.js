import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskInfo from './TaskInfo';
import Header from './Header';
import Footer from './Footer';
import DateComponent from './DateComponent';



class App extends Component {
  state = {
      date: new Date()
  }

  callbackForDate = (calendarDate) => {
    this.setState({ date: calendarDate });
  }

  render() {

    return (
      <React.Fragment>
        <CssBaseline />
        <Header title="Evan" />
        <DateComponent calendarDate={this.state.date} callbackToApp={this.callbackForDate}/>
        <TaskInfo />
        <Footer title="Footer" description="Something here to give the footer a purpose!"/>
      </React.Fragment>
    );
  }
}

export default App;
