import React from 'react';
import { makeStyles,Paper, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme)=>({
root:{

}
}));

function AuctionCard() {
    const classes = useStyles()
  return (
    <>
    <Paper elevation={2} className={classes.root}>

    </Paper>
    </>
  )
}

export default AuctionCard;