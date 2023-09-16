import React, { useState } from "react";
import { Card, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
  main: {
    padding: "15px",
    maxHeight: "728px",
    height: "609px",
    "& img":{
      width:" 300px",
       height:" 300px"
    },

    "& h2":{
        fontSize:"14px",
        fontWeight:900,
    },
    "& h3":{
      fontSize:"11px",
    
  },
    "& h4":{
          fontSize:"12px",
          fontWeight:900,
    },
  },
}));

function Cardmap({ product }) {
  const classes = useStyles();


  // Here you should add Slider if you can.

  return (
    <>
      <Grid container spacing={2}>
        {product &&
          product.map((data, index) => {
            return (
              <Grid item md={4} sm={6} xs={12}>
                <Card className={classes.main}>
                  <img src={data.image} width="90%"/>
                  <Typography variant="h2">{data.title}</Typography>
                  <Typography variant="h4">{data.price}</Typography>
                  <Typography variant="h3">{data.description}</Typography>
                  <Typography variant="h4">{data.category}</Typography>
                  <Typography variant="h4">{data.rating.rate}</Typography>
                  <Rating name="size-medium" defaultValue={data.rating.count}/>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default Cardmap;
