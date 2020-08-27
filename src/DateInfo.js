import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Box from '@material-ui/core/Box';
import { Typography, Grid } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    alignItems: "center",
    spacing: 10,
  },
}));



const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());
  const classes = useStyles();

  return (
    <Grid container className={classes.control} justify="space-evenly" spacing={0}>
    {/* </Grid> <Grid container className={classes.control}>  */}
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
          {date}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default StaticDatePicker;
