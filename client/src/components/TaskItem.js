import React, { Component  } from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, Grid } from '@material-ui/core/';

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

    deleteTask = () => {
        this.props.deleteTaskCallback(this.state.task._id);
    }
    render() {
        return (
            <Grid item>
                <Box maxWidth={350}>
                    <Card>
                        <CardContent>
                        <Grid container alignItems="center" justify="flex-start" spacing={4}>
                            <Grid item>
                                <Typography variant="h3" component="h3">
                                {this.state.task.taskTitle}
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
                            {this.state.currentUser === this.state.task.user ? 
                            <Button variant="outlined" color="primary" size="small" onClick={this.deleteTask}>Delete</Button> : 
                            null}
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            );
        }
    }