import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

function Club() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Typography variant='h2'> Profile Club</Typography>
            </Box>
        </>
    )
}

export default Club;