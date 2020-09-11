import React, { Component } from "react";
import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Typography, Grid } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns'

const daysOfWeek = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

const monthsOfYear = {
  0: "January",
  1: "Feburary",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
}

class DateComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        calendarDate: new Date()
    };    
  }

  changeDate = (newDate) => {
    this.setState({ calendarDate: newDate });
    this.props.callbackToApp(this.state.calendarDate);
  }

  render() {
    return (
      <Grid container justify="space-evenly">
        <Grid item xs={12} md={9}>
          <Grid container alignItems="center" justify="space-evenly" spacing={4}>
            <Grid item xs={9} md={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Calendar
                  date={this.state.calendarDate}
                  onChange={(newDate) => this.changeDate(newDate)}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={9} md={3}>
              <Typography variant="h4" component="h1" gutterBottom>
                {daysOfWeek[this.state.calendarDate.getDay()] + ', '}
              </Typography>
              <Typography variant="h4" component="h1" gutterBottom>
                {monthsOfYear[this.state.calendarDate.getMonth()] + ' ' + this.state.calendarDate.getDate() + ', ' + this.state.calendarDate.getFullYear()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default DateComponent;