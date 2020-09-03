import * as React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Button from './node_modules/@material-ui/core/Button';
import Typography from './node_modules/@material-ui/core/Typography';
import { Container } from './node_modules/@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  }));
  
  export default function Header(props) {
    const classes = useStyles();
    const { title } = props;
  
    return (
      <React.Fragment>
        <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
            <Button size="small">Subscribe</Button>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
            >
                {title}
            </Typography>
            <Button variant="outlined" size="small">
                Sign up
            </Button>
            </Toolbar>
            
        </Container>
      </React.Fragment>
    );
  }
  
  Header.propTypes = {
    title: PropTypes.string,
  };
  