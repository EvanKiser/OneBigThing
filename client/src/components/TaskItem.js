import React, { Component  } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, Grid, Paper } from '@material-ui/core/';
//import '../css/taskItem.css'

export default class TaskItem extends Component {
    constructor(props) {
        super();
        this.state = {
            task: props.task,
            currentUser: props.currentUser
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState( (state, props) => ({
                task: props.task,
                currentUser: props.currentUser
            }));
        }
    }
    render() {
        return (
            <Grid item >
                <Paper>
                    <Card>
                        <CardContent>
                        <Grid container alignItems="center" justify="space-evenly" spacing={4}>
                            <Grid item>
                                <Typography variant="h2" component="h2">
                                {this.state.task.taskTitle.split("º").map((i,key) => {
                                    return <div key={key}>{i}</div>;
                                })}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" justify="space-evenly" spacing={0}>
                            <Grid item>
                                <Typography variant="h5" component="h5">
                                <i>{this.state.task.userName}</i>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src={this.state.task.userImage} alt={this.state.task.userName} />
                            </Grid>
                        </Grid>
                        </CardContent>
                        <CardActions>
                            {this.state.currentUser === this.state.task.user ? <Button variant="outlined" color="primary" size="small">Delete</Button> : null}
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
            );
        }
    }