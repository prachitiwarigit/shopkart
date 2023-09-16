import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

function Competition() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Typography variant='h2'> Profile Competition</Typography>
            </Box>
        </>
    )
}

export default Competition;