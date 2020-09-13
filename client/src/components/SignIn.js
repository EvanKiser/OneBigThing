import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
  AmazonLoginButton,
} from "react-social-login-buttons";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));


export default function SignIn() {
  const classes = useStyles();

  const logInWithGoogle = () => {
    axios.get('http://localhost:5000/auth/google', config)
      .then( (response) => { console.log(response); console.log('response') })
      .catch( (error) => { 
        console.log(error);
        console.log('dick')
      })
  }

  return (
    <div className="modal">
      <div className="modal_content">
          <div className={classes.paper}>
              <GoogleLoginButton onClick={logInWithGoogle} />
              <FacebookLoginButton />
              <TwitterLoginButton />
              <AmazonLoginButton />
          </div>
      </div>
    </div>
  );
}