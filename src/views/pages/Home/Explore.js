import React from 'react';
import { Box, Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExploreCard from 'src/component/ExploreCard';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));


const sellerData = [
    {
        image: "images/Explore/Explore1.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore2.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore3.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore4.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore1.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore2.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore3.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore4.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore1.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore2.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore3.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
    {
        image: "images/Explore/Explore4.png",
        name: "Skyblue Creator",
        price: "0.004 ETH"
    },
]

function Explore() {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.root}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box className='leftcontent'>
                                <Typography variant='h3'>Explore Items</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} align="right">
                            <Box className='rightcontent'>
                                <Button>
                                    <FilterListIcon />
                                    Recent Added
                                </Button>
                                <Button>
                                    <FilterListIcon />
                                    Category
                                </Button>
                                <Button>
                                    <FilterListIcon />
                                    Collections
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={2} mb={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <ExploreCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <ExploreCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <ExploreCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <ExploreCard />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Explore;