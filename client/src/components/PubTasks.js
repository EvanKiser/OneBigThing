import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskList from './TaskList';
import Header from './Header';
import Footer from './Footer';
import DateComponent from './DateComponent';
import PopUp from './CreateTaskPopUp';
import SignIn from './SignIn';
import axios from 'axios';

class App extends Component {
  state = {
      date: new Date(),
      user: {
        firstName: "",
        name: "dillhole",
        image: "www.image.com",
      },
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
    if (this.state.user.firstName !== "") {
      this.setState({
        user: {
          firstName: "",
          name: "",
          image: "",
        }
      });
    } else {
      this.setState({ signInPopUpOpen: !this.state.signInPopUpOpen });
    }
  }

  callbackForLogOut = () => {
    this.setState({
      user: {
        firstName: "",
        name: "",
        image: "",
      }
    });
  }

  checkUserInDB = (user) => {
    axios.get('http://localhost:5000/auth/google/', {
      params: {
        googleId: user.googleId
      }
    })
    .then(response => {
      if (response.status === 200) {
        if (response.data === 'User Not Found') {
           this.createUser(user)
        } else {
          this.setState({ user: {
            firstName: response.data.firstName,
            name: response.data.displayName,
            image: response.data.image,
          }});
        }
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  createUser = (user) => {
    axios.post('http://localhost:5000/auth/google/', {
      googleId: user.googleId,
      lastName: user.lastName,
      firstName: user.firstName,
      displayName: user.name,
      email: user.email,
      image: user.image
    })
    .then(response => {
      this.setState({ user: {
        firstName: response.data.firstName,
        name: response.data.displayName,
        image: response.data.image,
      }
    });
    })
    .catch( error => { console.log(error) })
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
          <Header title={this.state.user.firstName} callbackToTaskPopUp={this.callbackForTaskPopUp} callbackToSignInPopUp={this.callbackForSignInPopUp} logout={this.callbackForLogOut}/>
          {this.state.taskPopUpOpen ? <PopUp toggle={this.toggleTaskPop} /> : null }
          {this.state.signInPopUpOpen ? <SignIn userInDB={this.checkUserInDB} toggle={this.toggleSignInPop} /> : null }
          <DateComponent callbackToApp={this.callbackForDate}/>
          <TaskList tasks={this.tasksByDate(this.state.date)}/>
          <Footer title="Footer" description="Something here to give the footer a purpose!"/>
      </React.Fragment>
    );
  }
}

export default App;
