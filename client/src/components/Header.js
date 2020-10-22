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

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState( (state, props) => ({
                title: props.title 
            }));
        }
    }
            
    toggleTaskPop = () => {
      this.props.callbackToTaskPopUp();
    }

    toggleSignInPop = () => {
        if (this.state.title === "") {
            this.setState({
                title: "",
            })
        }
        this.props.callbackToSignInPopUp(true);
    }

    isLoggedIn = () => {
        if (this.state.title === "") {
            return "Log In To Share Your OBT For Today";
        }
        else {
            return "Log Out";
        }
    }

    titleLettering = () => {
        return "One Big Thing";
    }

    newTaskButton = () => {
        if (this.state.title !== "") {
            return true;
        }
        return false;
    }

    render() {
        return (
            <React.Fragment>
            <Container maxWidth="lg">
            <Toolbar className="toolbar">
            <Button variant="contained" size="small" color="primary" onClick={this.toggleSignInPop}>
                {this.isLoggedIn()}
            </Button>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className="toolbarTitle"
            >
                {this.titleLettering()}
            </Typography>
            {this.newTaskButton() ? <Button variant="contained" size="small" color="primary" onClick={this.toggleTaskPop}> Share Your OBT for Today </Button> : null }
            </Toolbar>
            
        </Container>
        </React.Fragment>
        );
    }
}