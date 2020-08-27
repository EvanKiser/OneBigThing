import React, { useState } from "react";
import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import { Container, Typography, Grid } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  } 

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Calendar
                date={date}
                onChange="changeDate"
            />
        </MuiPickersUtilsProvider>
        <Box color="primary.main" my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {new Date().getFullYear()}
          </Typography>
        </Box>
    </Grid>
  );
};

export default StaticDatePicker;
