import React from 'react';
import GoogleLogin from 'react-google-login';
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <div className="modal">
      <div className="modal_content">
          <div className={classes.paper}>
            <GoogleLogin
              clientId="215450700739-qn5dmq35b0v1emum5hetqgrvau4sr3cl.apps.googleusercontent.com"
              buttonText="Login With Google"
              onSuccess={logInWithGoogle}
              onFailure={console.log('onFailure')}
              cookiePolicy={'single_host_origin'}
            />,
          </div>
      </div>
    </div>
  );
}