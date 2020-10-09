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
  constructor() {
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
    this.postTask(newTask);
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

  callbackToDeleteTask = (id) => {
    this.deleteTaskById(id);
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
    this.getAllTasks();
  }

  checkUserInDB = (user) => {
    axios.get('/auth/google/', {
      params: {
        googleId: user.googleId
      }
    })
    .then(response => {
      if (response.status === 200) {
        if (response.data === 'User Not Found!') {
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
      this.getAllTasks();
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  createUser = (user) => {
    axios.post('/auth/google/', {
      googleId: user.googleId,
      lastName: user.lastName,
      firstName: user.firstName,
      displayName: user.name,
      email: user.email,
      image: user.image,
    })
    .then(response => {
      this.setState({ user: {
        googleId: response.data.googleId,
        firstName: response.data.firstName,
        name: response.data.displayName,
        image: response.data.image,
        }
      });
      this.getAllTasks();
    })
    .catch( error => { console.log(error) })
  }

  getAllTasks = async () => {
    await axios.get('/task/AllTasks/')
    .then(response => {
      let tasks = response.data;
      tasks.forEach(t => t.date = new Date(t.date))
      this.setState({ 
        tasks: tasks
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  postTask = async (taskTitle) => {
    await axios.post('/task/', {
      taskTitle: taskTitle,
      completed: false,
      date: new Date(),
      user: this.state.user.googleId,
      userName: this.state.user.name,
      userImage: this.state.user.image,
    })
    .then(response => {
      this.state.tasks.push({
        taskTitle: response.data.taskTitle,
        completed: response.data.completed,
        date: new Date(response.data.date),
        user: response.data.user,
        userName: this.state.user.name,
        userImage: response.data.image,
      });
      this.getAllTasks();
    })
    .catch( error => { console.log(error) })
  }

  deleteTaskById = async (id) => {
    console.log(`id: ${id}`)
    await axios.delete('/task/', { 
      params: {
        id: id
      }
    })
    .then(response => {
      console.log(response)
      this.getAllTasks()
    })
    .catch(error => {console.log(error)})
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

  chunk = (str, n) => {
    var ret = [];
    var i;
    var len;

    for(i = 0, len = str.length; i < len; i += n) {
       ret.push(str.substr(i, n))
    }
    return ret
  }

  tasksByDate = () => {
    const tasksByDate = this.state.tasks.filter(task => 
      (task.date.getMonth() === this.state.date.getMonth()) &&
      (task.date.getDate() === this.state.date.getDate()) &&
      (task.date.getFullYear() === this.state.date.getFullYear()) 
    );

    tasksByDate.map(t => {
      for (var i=0; i < t.taskTitle.length / 8; i++) {
        if (t.taskTitle.substring(10,11) !== 'º') {
          t.taskTitle = this.chunk(t.taskTitle, 10).join('º')
        }
      }
      return true;
    })
    return tasksByDate;
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
          <TaskList tasks={this.tasksByDate()} currentUser={this.state.user.googleId} callbackToDeleteTaskById={this.callbackToDeleteTask}/>
          <Footer title="" description="Thanks For Coming"/>
      </React.Fragment>
    );
  }
}

export default App;

