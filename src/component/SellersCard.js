// import React from 'react';
// import { makeStyles,Paper, Typography } from '@material-ui/core';



// const useStyles = makeStyles((theme)=>({
// root:{

// }
// }));

// function SellersCard() {
//     const classes = useStyles()
//   return (
//     <>
//     <Paper elevation={2} className={classes.root}>
// <Typography variant='h1'>Hello Ankit Pandey How are You?</Typography>
//     </Paper>
//     </>
//   )
// }

// export default SellersCard;


import React from "react";
import { Box, Typography, makeStyles, List, ListItem, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  box: {
    padding: "10px",
    background: "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
    border: "1px solid #A8CEDF",
    backdropFilter: "blur(42px)",
    borderRadius: "10px",
    "&:hover": {
      filter: "drop-shadow(0px 0px 53px rgba(0, 0, 0, 0.25))"
      // backgroundColor: "#303338",
      // borderColor: "#161B21",
      // borderRadius: "5px",
    },
    "& ul": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 0,
      "& li": {
        padding: 0,
      },
    },
    "& figure": {
      height: "50px",
      width: "50px",
      margin: 0,
      borderRadius: "50%",
      backgroundColor: "#8f8f8f",
      marginRight: "10px",
      position: "relative",
      "& svg": {
        position: "absolute",
        top: "-5px",
        right: 0,
        color: "#2599fa",
        fontSize: "12px",
      },
      "& img": {
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        borderRadius: "50%",
      },
    },
    "& h6": {
      width: " 100%",
      maxWidth: "150px",
      overflow: " hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: "#fff",
      fontSize: "16px ",
      [theme.breakpoints.down("md")]: {
        maxWidth: "100px",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "150px",
      },
    },
    "& label": {
      fontSize: "14px",
      color: "#8B939A",
    },
    "& span": {
      fontSize: "12px",
    },
    "& small": {
      color: " #fff",
      paddingRight: "10px",
      fontSize: "12px",
      fontWeight: "500",
      marginTop: "0",
    },
  },
  firstChild: {
    width: "100%",
  },
  // lasttChild: {
  //   width: "30%",
  //   display: "flex",
  //   justifyContent: "flex-end",
  // },
}));
export default function TopCard(props) {
  const classes = useStyles();
  const { data, number } = props;
  const history = useHistory();
  return (
    <Box
      className={classes.box}
      pt={2}
      style={{
        cursor: "pointer",
      }}
      // onClick={() => {
      //   history.push({
      //     pathname: "/app/profile",
      //     search: data._id,
      //   });
      // }}
    >
      <List>
        <ListItem className={classes.firstChild}>
          <figure>
            <img src={data?.image}/>
          </figure>
          <Box>
            <Typography variant='h6'>{data?.name}</Typography>
            <Typography variant='h6'>{data?.price}</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
