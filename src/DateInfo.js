import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Box from '@material-ui/core/Box';
import { Typography, Grid } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));



const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());
  const classes = useStyles();


  return (
    <Grid container alignItems="center" justify="space-evenly" spacing={0} >
      <Grid item xs={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Calendar
                date={date}
                onChange={(newDate) => changeDate(newDate)}
            />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          {daysOfWeek[date.getDay()] + ', '}
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          {monthsOfYear[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default StaticDatePicker;
