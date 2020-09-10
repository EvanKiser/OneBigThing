import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, Grid, Paper } from '@material-ui/core/';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

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
    const [task]= useState(props.task);
    const classes = useStyles();

  return (
    <Grid item >
        <Paper>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {task.taskTitle}
                    </Typography>
                    < AccountBalanceWalletIcon/>
                    <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Paper>
    </Grid>
  );
}