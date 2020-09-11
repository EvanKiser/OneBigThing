import React, { Component } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import '../css/header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
        };    
    }

    toggleTaskPop = () => {
      this.props.callbackToTaskPopUp(true);
    }

    toggleSignInPop = () => {
        this.props.callbackToSignInPopUp(true);
      }

    render() {
        return (
            <Container maxWidth="lg">
            <Toolbar className="toolbar">
            <Button size="small" onClick={this.toggleSignInPop}>Log In</Button>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className="toolbarTitle"
            >
                {this.state.title}
            </Typography>
            <Button size="small" onClick={this.toggleTaskPop}>
                New Task
            </Button>
            </Toolbar>
            
        </Container>
        );
    }
}