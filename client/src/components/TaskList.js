import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TaskItem from './TaskItem';
//import Task from '../Models/Task';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    divStyle: {
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
});

export default function TaskList(props) {
  console.log(props.tasks);
  const classes = useStyles();

  return (
    <div className={classes.divStyle}>
        <Grid container justify="space-evenly">
            <Grid item xs={9}>
                <Grid container alignItems="center" justify="space-evenly" spacing={4}>
                    {props.tasks.map( (task, index) => 
                        <TaskItem key={index} task={task} />
                    )}
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}