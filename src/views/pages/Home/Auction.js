import React from 'react';
import { Box, Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import AuctionCard from 'src/component/AuctionCard';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const sellerData = [
    {
        name: "Craig Fenton",
        title: "Strategy & Operations",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "Craig Fenton",
        title: "Strategy & Operations",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "Craig Fenton",
        title: "Strategy & Operations",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "Craig Fenton",
        title: "Strategy & Operations",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "Craig Fenton",
        title: "Strategy & Operations",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "Craig Fenton",
        title: "Strategy & Operations",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
]

function Auction() {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.root}>
                <Container maxWidth="lg">
                    <Box mt={2} mb={2}>
                        <Typography variant='h3'>Live Auctions</Typography>
                    </Box>
                    <Box mt={2} mb={2}>
                        <Grid container spacing={2}>
                            {sellerData.map((data, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <AuctionCard />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Auction;