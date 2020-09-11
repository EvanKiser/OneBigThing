import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskList from './TaskList';
import Header from './Header';
import Footer from './Footer';
import DateComponent from './DateComponent';
import PopUp from './CreateTaskPopUp';


class App extends Component {
  state = {
      date: new Date(),
      tasks: [],
      popUpOpen: false,
  }

  callbackForDate = (calendarDate) => {
    this.setState({ date: calendarDate });
  }

  callbackForPopUp = () => {
    this.setState({ popUpOpen: !this.state.popUpOpen });
  }

  togglePop = () => {
    this.setState({
      popUpOpen: !this.state.popUpOpen
    });
  }

  tasksByDate = () => {
    let list = this.state.tasks.filter(t => t.date.getDay() === this.state.date.getDay());
    return list;
  }

  render() {

    return (
      <React.Fragment>
          <CssBaseline />
          <Header title="Evan" callbackToPopUp={this.callbackForPopUp}/>
          {this.state.popUpOpen ? <PopUp toggle={this.togglePop} /> : null}
          <DateComponent callbackToApp={this.callbackForDate}/>
          <TaskList tasks={this.tasksByDate(this.state.date)}/>
          <Footer title="Footer" description="Something here to give the footer a purpose!"/>
      </React.Fragment>
    );
  }
}

export default App;
