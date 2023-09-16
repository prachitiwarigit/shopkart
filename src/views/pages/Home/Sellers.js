import React from 'react';
import { Box, Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import SellersCard from 'src/component/SellersCard';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const sellerData = [
    {
        image: "images/Sellers1.png",
        name: "Sophia Valentine",
        price: "0.99  ETH"
    },
    {
        image: "images/Sellers2.png",
        name: "The Metakey",
        price: "0.43  ETH"
    },
    {
        image: "images/Sellers3.png",
        name: "Diamond HODLR",
        price: "4.73  ETH"
    },
    {
        image: "images/Sellers4.png",
        name: "Sophia Valentine",
        price: "5.22  ETH"
    },
    {
        image: "images/Sellers1.png",
        name: "Sophia Valentine",
        price: "0.99  ETH"
    },
    {
        image: "images/Sellers2.png",
        name: "The Metakey",
        price: "0.43  ETH"
    },
    {
        image: "images/Sellers3.png",
        name: "Diamond HODLR",
        price: "4.73  ETH"
    },
    {
        image: "images/Sellers4.png",
        name: "Sophia Valentine",
        price: "5.22  ETH"
    },
    {
        image: "images/Sellers1.png",
        name: "Sophia Valentine",
        price: "0.99  ETH"
    },
    {
        image: "images/Sellers2.png",
        name: "The Metakey",
        price: "0.43  ETH"
    },
    {
        image: "images/Sellers3.png",
        name: "Diamond HODLR",
        price: "4.73  ETH"
    },
    {
        image: "images/Sellers4.png",
        name: "Sophia Valentine",
        price: "5.22  ETH"
    },
]

function Sellers() {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.root}>
                <Container maxWidth="lg">
                    <Box mt={2} mb={2}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h3'>Top Sellers in 1 day</Typography>
                            <ExpandMoreIcon />
                        </Box>
                    </Box>
                    <Box mt={2} mb={2}>
                        <Grid container spacing={2}>
                            {
                                sellerData.map((data, i) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <SellersCard type="card" data={data} key={i} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Sellers;