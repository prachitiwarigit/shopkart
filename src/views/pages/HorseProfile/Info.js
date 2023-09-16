// import React from 'react';
// import { makeStyles, Box, Typography } from '@material-ui/core';



// const useStyles = makeStyles((theme) => ({
//     root: {

//     }
// }));

// function Info() {
//     const classes = useStyles();
//     return (
//         <>
//             <Box className={classes.root}>
//                 <Typography variant='h2'> Profile Info</Typography>
//             </Box>
//         </>
//     )
// }

// export default Info;


import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Divider,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  Paper,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Ddata = [
  {
    track: "Gulfstream Park",
    date: "2022/01/29",
    race: "12",
    racetype: "Pegasus World Cup Inventional...",

    Breed: "TB",
    finish: "1",
  },
  {
    track: "Gulfstream Park",
    date: "2022/01/29",
    race: "12",
    racetype: "Pegasus World Cup Inventional...",

    Breed: "TB",
    finish: "1",
  },
  {
    track: "Gulfstream Park",
    date: "2022/01/29",
    race: "12",
    racetype: "Pegasus World Cup Inventional...",

    Breed: "TB",
    finish: "1",
  },
  {
    track: "Gulfstream Park",
    date: "2022/01/29",
    race: "12",
    racetype: "Pegasus World Cup Inventional...",

    Breed: "TB",
    finish: "1",
  },
  {
    track: "Gulfstream Park",
    date: "2022/01/29",
    race: "12",
    racetype: "Pegasus World Cup Inventional...",

    Breed: "TB",
    finish: "1",
  },
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },

  container: {
    overflow: "hidden",
    "@media(max-width:991px)": {
      overflow: "scroll",
    },
    "& .TableHeadrow": {
      "& th": {
        border: "none",
        color: theme.palette.text.black,
      },
    },
  },
  tablemainbox: {
    padding: "20px",
    backgroundColor: "#272727",
    "& h2": {
      fontSize: "22px",
      fontWeight: "400",
      letterSpacing: "2px",
      fontFamily: "Impact",
      marginBottom: "10px",
    },
  },
  dividemain: {
    borderBottom: "1px solid #585858",
  },
}));
function Info() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerbox}>
      <Container>
        <Box>
          <Box mt={8} className={classes.tablemainbox}>
            <Box>
              <Typography variant="h2">Past Result</Typography>
            </Box>
            <Box mb={2}>
              <Divider className={classes.dividemain} />
            </Box>
            <TableContainer component={Paper} className={classes.container}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className="TableHead">
                  <TableRow className="TableHeadrow">
                    <TableCell align="left">Track</TableCell>

                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">Race</TableCell>
                    <TableCell align="left">Race Type</TableCell>
                    <TableCell align="left">Breed</TableCell>
                    <TableCell align="left">Finish</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Ddata.map((data) => (
                    <TableRow>
                      <TableCell>{data.track}</TableCell>{" "}
                      <TableCell>{data.date}</TableCell>
                      <TableCell>
                        <Box className={classes.activeparent}>{data.race}</Box>
                      </TableCell>
                      <TableCell>{data.racetype}</TableCell>
                      <TableCell>{data.Breed}</TableCell>
                      <TableCell>{data.finish}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Info;
