import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  ListItem,
  List,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bannerBox: {

    backgroundColor: '#000',
    height: "90vh",
    padding: "150px 0px 50px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  // bannerimages: {
  //   display: "flex",
  //   position: "relative",
  //   justifyContent: "flex-end",
  //   [theme.breakpoints.down("xs")]: {
  //     justifyContent: "center",
  //   },
  //   "& figure": {
  //     height: "auto",
  //     marginLeft: "20px",
  //     marginBottom: "20px",
  //     overflow: "hidden",
  //     [theme.breakpoints.down("xs")]: {
  //       width: "150px",
  //       overflow: "inherit",
  //     },
  //     "& img": {
  //       transition: "02s",
  //       [theme.breakpoints.down("xs")]: {
  //         width: "100%",
  //       },
  //     },
  //     "&:hover": {
  //       "& img": {
  //         transform: "scale(1.1)",
  //         boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 
  textbox: {
    "& h1": {
      fontSize: "50px",
      fontWeight: "600",
      color: "#300760",
      [theme.breakpoints.down("lg")]: {
        fontSize: "50px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    "& p": {
      fontSize: "16px",
      marginTop: "20px",
    },
  },
  image2: {
    marginLeft: "-20px !important",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px !important",
    },
  },
  buttonright: {
    marginLeft: "10px !important",
    minWidth: "150px",
  },
  minth1: {
    fontFamily: "Italianno",
    fontSize: "80px !important",
    fontWeight: "100px !important",
    lineHeight: "80px",
  },
  main: {
    border: '1px solid #fff',
  },
  back: {
    background: "url('images/banner.png')",
    backgroundSize: "contain",
    width: "100%",
    height: "100vh",
    display: "flex",
  //  justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {

      height: "200px",
    },

    "& h1": {
      //width: "689px",
      marginTop: "-20px",
      marginLeft:"100px",
      border: "1px",
      color: "#fff",
      fontSize: "170px",
      fontWeight: "1000",
      textAlign:"left",
      alignItems:"left",
      [theme.breakpoints.down('sm')]: {

        marginTop: '15px',
        fontSize: "40px",

      },
    },
    "& h2": {
      color: '#fff',
      marginLeft: "400px",
      fontSize: "170px",
      fontWeight: "900",
      marginTop:"-70px",
      [theme.breakpoints.down('sm')]: {
        marginLeft: "115px",
        fontSize: "40px",
        marginTop:"-22px",
      },
    },
    "& h3": {
      color: '#fff',
      marginLeft: "150px",
      fontSize: "160px",
      fontWeight: "900",
      paddingBottom:"30px",
      marginTop:"-70px",
      [theme.breakpoints.down('sm')]: {
        marginTop:"-13px",
        fontSize: "40px",
          marginLeft:"104px",
      },
    },
  },
  menu: {
    marginLeft: "40px",
    [theme.breakpoints.down('md')]: {
      display: "none",

    }
  },
  img: {
    width: '200%',
    height: "600px",

    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },

  },
  divi:{
     backgroundColor: "#626262",
      width: "98%",
       marginTop: '-20px',
       [theme.breakpoints.down('sm')]:{
           marginTop:"-40px",
       },
  },
}));

export default function BestSeller() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.bannerBox}>
        {/* <Box className="round1">
      </Box>
      <Box className="round3"></Box>
      <Box className="round4"></Box>
      <div className="bigRound"></div>
      <img src="images/banner/1.png" className="bannerimg1" alt="" />
      <img src="images/banner/2.png" className="bannerimg2" alt="" />
      */}
        <Container>
          <Divider className={classes.divi} />
          <Grid container spacing={1} className={classes.menu}>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box style={{ paddingTop: "10px", }}>

                <Typography variant="h6" style={{ color: '#fff' }}>Home</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box style={{ paddingTop: "10px", }}>

                <Typography variant="h6" style={{ color: '#fff' }}>About</Typography>
              </Box>

            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>

              <Box style={{ paddingTop: "10px", }}>

                <Typography variant="h6" style={{ color: '#fff' }}>Our Product</Typography>
              </Box>

            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>

              <Box style={{ paddingTop: "10px", }}>

                <Typography variant="h6" style={{ color: '#fff' }}>Contact Us</Typography>
              </Box>

            </Grid>
          </Grid>
        </Container>


        <Grid container>
          <Box className={classes.back}>

            <Grid item md={12} sm={12} xs={12}>
              <Typography variant='h1'>Fresh</Typography>
              <Typography variant="h2">2022</Typography>
                 <Typography variant="h3">LooK</Typography> 
            </Grid>
            {/* <Grid item md={6}>
                {/* <img src="images/banner.png" className={classes.img} /> */}
            {/* </Grid>  */}

          </Box>
        </Grid>

      </Box>
    </>
  );
}
