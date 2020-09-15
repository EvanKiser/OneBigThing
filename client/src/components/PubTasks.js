import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskList from './TaskList';
import Header from './Header';
import Footer from './Footer';
import DateComponent from './DateComponent';
import PopUp from './CreateTaskPopUp';
import SignIn from './SignIn';
import axios from 'axios';
import datefns from 'date-fns';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      date: new Date(),
      user: {
        googleId: "",
        firstName: "",
        name: "",
        image: "",
      },
      tasks: [],
      taskPopUpOpen: false,
      signInPopUpOpen: false,
    };
    this.getAllTasks();
  }

  callbackForDate = (calendarDate) => {
    this.setState({ date: calendarDate });
  }

  callbackForTaskPopUp = () => {
    this.setState({ taskPopUpOpen: !this.state.taskPopUpOpen });
  }

  callbackToCreateNewTask = (newTask) => {
    console.log('All Tasks at Start ');
    console.log(this.state.tasks);
    this.postTask(newTask);
    console.log('All tasks after posting one');
    console.log(this.state.tasks);
  }

  callbackForSignInPopUp = () => {
    if (this.state.user.firstName !== "") {
      this.setState({
        user: {
          firstName: "",
          googleId: "",
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
        googleId: "",
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
            googleId: response.data.googleId,
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
        googleId: response.data.googleId,
        firstName: response.data.firstName,
        name: response.data.displayName,
        image: response.data.image,
      }
    });
    })
    .catch( error => { console.log(error) })
  }

  getAllTasks = async () => {
    await axios.get('http://localhost:5000/task/AllTasks/')
    .then(response => {
      this.setState({
        tasks: response.data
      });
    })
    .catch(err => {
      console.log(err)
    })
  }

  postTask = (taskTitle) => {
    console.log(this.state.user);
    axios.post('http://localhost:5000/task/', {
      taskTitle: taskTitle,
      completed: false,
      date: new Date(),
      user: this.state.user.googleId,
      image: this.state.user.image
    })
    .then(response => {
      this.state.tasks.push({
        taskTitle: response.data.taskTitle,
        completed: response.data.completed,
        date: response.data.date,
        user: response.data.user,
      });
      console.log(this.state.tasks);
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

  tasksByDate = (tasks) => {
    // let list = this.state.tasks.filter(t => t.date.getDay() === this.state.date.getDay());
    // return list;
  }

  render() {
    return (
      <React.Fragment>
          <CssBaseline />
          <Header 
            title={this.state.user.firstName} 
            callbackToTaskPopUp={this.callbackForTaskPopUp} 
            callbackToSignInPopUp={this.callbackForSignInPopUp} 
            logout={this.callbackForLogOut}
            />
          {this.state.taskPopUpOpen ? 
            <PopUp 
              toggle={this.toggleTaskPop}
              callbackToNewTask={this.callbackToCreateNewTask} 
              /> : null 
          }
          {this.state.signInPopUpOpen ? <SignIn userInDB={this.checkUserInDB} toggle={this.toggleSignInPop} /> : null }
          <DateComponent callbackToApp={this.callbackForDate}/>
          {//<TaskList tasks={this.tasksByDate(this.state.date)}/>}
          <TaskList />}
          <Footer title="Footer" description="Something here to give the footer a purpose!"/>
      </React.Fragment>
    );
  }
}

export default App;
