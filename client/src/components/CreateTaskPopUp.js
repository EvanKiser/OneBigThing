import React from "react";
import '../css/createTaskPopUp.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateTaskPopUp(props) {
  const classes = useStyles();

  const handleClick = () => {
   props.toggle();
  };

  return (
    <div className="modal">
    <div className="modal_content">
      <span className="close" onClick={handleClick}>
        &times;
      </span>
      <form className={classes.form} noValidate>
          What are you trying to complete today?
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="taskTitle"
            name="taskTitle"
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
      </form>
    </div>
  </div>
  );
 }