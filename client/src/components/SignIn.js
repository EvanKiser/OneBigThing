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

  // Load config
  //dotenv.config( { path: '../../config/config.env' } )
  
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
    console.log(process.env);
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
            clientId="215450700739-qn5dmq35b0v1emum5hetqgrvau4sr3cl.apps.googleusercontent.com"
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