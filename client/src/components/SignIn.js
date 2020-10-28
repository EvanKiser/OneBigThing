import React from 'react';
import GoogleLogin from 'react-google-login';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  
  const logInWithGoogle = (response) => {
    props.toggle();
    const user = {
      googleId: response.profileObj.googleId,
      lastName: response.profileObj.familyName,
      firstName: response.profileObj.givenName,
      name: response.profileObj.name,
      email: response.profileObj.email,
      image: response.profileObj.imageUrl,
    };
    props.userInDB(user);
  }

  const closeClicked = () => {
    props.toggle();
  }

  return (
    <div className="modal">
      <ClickAwayListener onClickAway={closeClicked}>
      <div className="modal_content">
        <span className="close" onClick={closeClicked}>
          &times;
        </span>    
        <div className={classes.paper}>
          <GoogleLogin
            clientId={process.env.GOOGLE_API_ID}
            buttonText="Login With Google"
            onSuccess={logInWithGoogle}
            onFailure={console.log('Google Auth Failed')}
          />
        </div>
      </div>
    </ClickAwayListener>
    </div>
  );
}