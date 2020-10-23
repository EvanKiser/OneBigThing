import * as React from 'react';
import { makeStyles } from '@material-ui/core/';
import { Container } from '@material-ui/core/';
import { Grid } from '@material-ui/core/';
import { Link } from '@material-ui/core/';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright() {
  return (
    <Grid container justify="flex-end" alignItems="flex-end" spacing={1}>
    <Grid item>
      <Link href="https://twitter.com/evanjkiser">
        <TwitterIcon fontSize="small"/>
      </Link>
    </Grid>
    <Grid item>
      <Link href="https://www.linkedin.com/in/evankiser/">
        <LinkedInIcon fontSize="small"/>
      </Link>
    </Grid>
    <Grid item>
      <Link href="https://github.com/EvanKiser/PubTasks">
        <GitHubIcon fontSize="small"/>
      </Link>
    </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </footer>
  );
}
