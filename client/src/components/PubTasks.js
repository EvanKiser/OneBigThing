import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskList from './TaskList';
import Header from './Header';
import Footer from './Footer';
import DateComponent from './DateComponent';
import PopUp from './CreateTaskPopUp';
import SignIn from './SignIn';


class App extends Component {
  state = {
      date: new Date(),
      tasks: [],
      taskPopUpOpen: false,
      signInPopUpOpen: false,
  }

  callbackForDate = (calendarDate) => {
    this.setState({ date: calendarDate });
  }

  callbackForTaskPopUp = () => {
    this.setState({ taskPopUpOpen: !this.state.taskPopUpOpen });
  }

  callbackForSignInPopUp = () => {
    this.setState({ signInPopUpOpen: !this.state.signInPopUpOpen });
  }

  toggleTaskPop = () => {
    this.setState({
      taskPopUpOpen: !this.state.taskPopUpOpen
    });
  }

  toggleSignInPop = () => {
    this.setState({
      signInPopUpOpen: !this.state.signInPopUpOpen
    })
  }

  tasksByDate = () => {
    let list = this.state.tasks.filter(t => t.date.getDay() === this.state.date.getDay());
    return list;
  }

  render() {

    return (
      <React.Fragment>
          <CssBaseline />
          <Header title="Evan" callbackToTaskPopUp={this.callbackForTaskPopUp} callbackToSignInPopUp={this.callbackForSignInPopUp}/>
          {this.state.taskPopUpOpen ? <PopUp toggle={this.toggleTaskPop} /> : null}
          {this.state.signInPopUpOpen ? <SignIn toggle={this.toggleSignInPop} /> : null}
          <DateComponent callbackToApp={this.callbackForDate}/>
          <TaskList tasks={this.tasksByDate(this.state.date)}/>
          <Footer title="Footer" description="Something here to give the footer a purpose!"/>
      </React.Fragment>
    );
  }
}

export default App;
