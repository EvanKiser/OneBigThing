import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
  AmazonLoginButton,
} from "react-social-login-buttons";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className="modal">
      <div className="modal_content">
          <div className={classes.paper}>
              <GoogleLoginButton />
              <FacebookLoginButton />
              <TwitterLoginButton />
              <AmazonLoginButton />
          </div>
      </div>
    </div>
  );
}