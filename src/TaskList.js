import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import TaskItem from './TaskItem';

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

export default function TaskList() {
  const classes = useStyles();

  return (
    <div className={classes.divStyle}>
        <Grid container justify="space-evenly">
            <Grid item xs={9}>
                <Grid container alignItems="center" justify="space-evenly" spacing={4}>
                    {[0,1,2,3,4,5,6,7,8,9].map(id => 
                        <TaskItem itemId={id} />
                    )}
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}