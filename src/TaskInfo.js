import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, Grid, Paper, TextareaAutosize } from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
        marginBottom: 12,
  },
  divStyle: {
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'center',
  },
  gridContainer: {
        alignItems: "center",
        justify: 'space-evenly',
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.divStyle}>
    <Grid container className="gridContainer" xs={9} spacing={6}>
        {[1,2,4,5,6,7,8,9,10].map(m => 
            <Grid item >
            <Paper>
                <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </Paper>
            </Grid>
        )}
    </Grid>
    </div>
  );
}