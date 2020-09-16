import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, Grid, Paper } from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    divStyle: {
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
});

export default function TaskItem(props) {
    const [task] = useState(props.task);
    const classes = useStyles();

  return (
    <Grid item >
        <Paper>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h2" component="h2">
                    {task.taskTitle}
                    </Typography>
                    <Typography variant="h5" component="h5">
                    {task.userName}
                    </Typography>
                    <img src={task.userImage} alt={task.userName} />
                </CardContent>
                <CardActions>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </Paper>
    </Grid>
  );
}