import React from 'react';
import { Box, Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import CollectionCard from 'src/component/CollectionCard';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const collectionData = [
    {
        image:"images/Collections/Collection1.png",
        img: "images/Sellers1.png",
        name: "Sophia Valentine",
        price: "0.99  ETH"
    },
    {
        image:"images/Collections/Collection2.png",
        img: "images/Sellers2.png",
        name: "The Metakey",
        price: "0.43  ETH"
    },
    {
        image:"images/Collections/Collection3.png",
        img: "images/Sellers3.png",
        name: "Diamond HODLR",
        price: "4.73  ETH"
    },
    {
        image:"images/Collections/Collection4.png",
        img: "images/Sellers4.png",
        name: "Sophia Valentine",
        price: "5.22  ETH"
    },
    {
        image:"images/Collections/Collection5.png",
        img: "images/Sellers1.png",
        name: "Sophia Valentine",
        price: "0.99  ETH"
    },
    {
        image:"images/Collections/Collection1.png",
        img: "images/Sellers2.png",
        name: "The Metakey",
        price: "0.43  ETH"
    },
    {
        image:"images/Collections/Collection2.png",
        img: "images/Sellers3.png",
        name: "Diamond HODLR",
        price: "4.73  ETH"
    },
    {
        image:"images/Collections/Collection3.png",
        img: "images/Sellers4.png",
        name: "Sophia Valentine",
        price: "5.22  ETH"
    },
]

function Collection() {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.root}>
                <Container maxWidth="lg">
                    <Box mt={2} mb={2}>
                        <Typography variant='h3'>Hot Collection</Typography>
                    </Box>
                    <Box mt={2} mb={2}>
                        <Grid container spacing={2}>
                            {
                                collectionData.map((data, i) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <CollectionCard type="card" data={data} key={i}/>
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

export default Collection;