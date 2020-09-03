import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskList from './TaskList';
import Header from './Header';
import Footer from './Footer';
import DateComponent from './DateComponent';
import Task from '../Models/Task';


class App extends Component {
  state = {
      date: new Date(),
      tasks: [new Task("Evan's tasks"),
              new Task("Not Evan's Task")],
  }

  callbackForDate = (calendarDate) => {
    this.setState({ date: calendarDate });
  }

  tasksByDate = () => {
    let list = this.state.tasks.filter(t => t.date.getDay() === this.state.date.getDay());
    return list;
  }

  render() {

    return (
      <React.Fragment>
        <CssBaseline />
        <Header title="Evan" />
        <DateComponent callbackToApp={this.callbackForDate}/>
        <TaskList tasks={this.tasksByDate(this.state.date)}/>
        <Footer title="Footer" description="Something here to give the footer a purpose!"/>
      </React.Fragment>
    );
  }
}

export default App;
