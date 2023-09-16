import React from 'react';
import { makeStyles,Paper, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme)=>({
root:{

}
}));

function ExploreCard() {
    const classes = useStyles()
  return (
    <>
    <Paper elevation={2} className={classes.root}>
<Typography variant='h1'>Hello Ankit Pandey How are You?</Typography>
    </Paper>
    </>
  )
}

export default ExploreCard;