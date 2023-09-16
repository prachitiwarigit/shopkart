// import React from 'react';
// import { makeStyles,Paper, Typography } from '@material-ui/core';



// const useStyles = makeStyles((theme)=>({
// root:{

// }
// }));

// function CollectionCard() {
//     const classes = useStyles()
//   return (
//     <>
//     <Paper elevation={2} className={classes.root}>
// <Typography variant='h1'>Hello Ankit Pandey How are You?</Typography>
//     </Paper>
//     </>
//   )
// }

// export default CollectionCard;



import React from "react";
import { Box, Typography, makeStyles, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  box: {
    position: "relative",
    width: "100%",
    padding: "20px",
    borderRadius: "16px",
    background: "linear-gradient(136deg, #fff7f733 0%, #fff3 100%)",
    backdropFilter: " blur(42px)",
    textAlign: "center",
    "& h3": {
      width: "100%",
      maxWidth: "70%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      margin: "10px auto",
      color: "#8b939a",
    },
    "& p": {
      color: "#ccc",
    },
    "& figure": {
      width: "100%",
      maxWidth: "80px",
      height: "80px",
      borderRadius: "50%",
      overflow: "hidden",
      margin: "0 auto",
      marginTop: "-40px",
      position: "relative",
      background:
        "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      backdropFilter: " blur(42px)",
      border: "3px solid #161616",
      background:"rgb(42 123 135)",
      "& img": {
        width: "100%",

      },
    },
  },
  background: {
    background:
      " linear-gradient(  152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
    backdropFilter: "blur(42px)",
    borderRadius: "10px",
    width: "100%",
    height: "100px",
    overflow: "hidden",
  },
}));
export default function HotCollectionCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    <Box className="CardBox" style={{ cursor: "pointer" }}>
      <Box
        className={classes.box}
        // onClick={() =>
        //   history.push({
        //     pathname: "/app/collection",
        //     search: data._id,
        //   })
        // }
      >
        <Box className={classes.background}>
          <img
            src={data?.image}
            alt="user"
            style={{ width: "100%" }}
          />
        </Box>
        <figure>
          {" "}
          <img
            src={data?.img}
            alt="user"
          />
        </figure>
        <Typography
          variant="h3"
          align="center"
          style={{ fontSize: "14px", color: "#fff" }}
        >
          {data?.name}
        </Typography>
        <Typography variant="body2"> {data?.price} </Typography>
      </Box>
    </Box>
  );
}
