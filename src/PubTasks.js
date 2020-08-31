import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskList from './Views/TaskList';
import Header from './Views/Header';
import Footer from './Views/Footer';
import DateComponent from './Views/DateComponent';



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
        <DateComponent callbackToApp={this.callbackForDate}/>
        <TaskList />
        <Footer title="Footer" description="Something here to give the footer a purpose!"/>
      </React.Fragment>
    );
  }
}

export default App;
