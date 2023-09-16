import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

function NFTActivity() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Typography variant='h2'> Profile NFTActivity</Typography>
            </Box>
        </>
    )
}

export default NFTActivity;