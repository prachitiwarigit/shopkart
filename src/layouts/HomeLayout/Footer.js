import {
  Container,
  Grid,
  makeStyles,
  ListItem,
  Typography,
  TextField,
  List,
  Box,
  Divider,
  FormHelperText,
  FormControl,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yep from "yup";
import React, { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => ({
  mainSection: {
    marginTop: "1100px",
    paddingTop: "60px",
    backgroundColor: "#1A1A1A",
    [theme.breakpoints.down('sm')]: {
      // width: "137px",
      // height: "182px",
      marginTop: "3889px",
    },
    "& h5": {
      fontSize: "26px",
      paddingTop: '30px',
      fontWeight: 600,
      color: "#757575",
    },
    "& h6": {
      fontSize: "18px",
      width: '300px',
      fontWeight: 400,
      color: "#757575",
    },
  },



  FooterSubPart: {
    textAlign: "left",
    padding: "16px 5px",
    border: "1px solid #e7e7e7",
    borderRadius: "5px",
    marginBottom: "30px",
    // boxShadow:"0 0 transparent",
    "& p": {
      fontStyle: "italic",
      fontWeight: 400,
      color: "#7a7a7a",
    },
  },
  FooterSubPart1: {
    backgroundColor: "#000",
    textAlign: "center",
    padding: "15px 0px",
    borderRadius: "5px",
    "& p": {
      color: "#333",
      fontWeight: 400,
      fontSize: "12px",
    },
  },

  text1: {
    "& h1": {
      fontSize: "135px",
      fontWeight: "800",
      color: '#fff',

      border: "1px",
      [theme.breakpoints.down('sm')]: {
        fontSize: "50px",
      }
    },
    "& h2": {
      fontSize: "135px",
      fontWeight: "800",
      color: '#fff',
      marginTop: "-50px",
      border: "1px",
      [theme.breakpoints.down('sm')]: {
        fontSize: "50px",
        paddingTop: "20px",
      }
    },
  },
  btn: {
    width: "150px",
    height: "150px",
    color: '#F07E15',
    fontSize: "16px",
    borderRadius: "100px",
    padding: '30px',
    border: "2px solid #F07E15",
    [theme.breakpoints.down('sm')]: {
      width: "130px",
      height: "130px",
    },
  },
  text: {
    paddingTop: "30px",
    [theme.breakpoints.down('sm')]: {
      marginTop: "50px",
    }
  },
}));
const formInitialSchema = {
  name: "",
  email: "",
  message: "",
};

const formValidationSchema = yep.object().shape({
  name: yep
    .string()
    .required("Please enter first name")
    .min(2, "Minimum 2 charecter.")
    .max(50, "Maximum 50 charecter"),


  email: yep
    .string()
    .email("Please enter an valid email address.")
    .required("Email address is required")
    .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    .max(360, "Maximum 360 charecter."), // need to check again

  message: yep
    .string()
    .required("Please enter the message.")
    .max(500, "Maximum 500 charecters"), // need to check again
});

const Footer = () => {
  const classes = useStyles();



  return (
    <div className={classes.mainSection}>
      <Formik
        initialValues={formInitialSchema}
        initialStatus={{
          success: false,
          successMsg: "",
        }}
        validationSchema={formValidationSchema}
      //  onSubmit={(values) => handleFormSubmit(values)}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
          setFieldValue,
        }) => (
          <Form>
            <Container>
              <Grid container>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                  <Typography variant="h5">Newslleter</Typography>
                  <Typography variant="h6">
                    Get news about articles and updates in your inbox.</Typography>
                </Grid>


                <Grid item xs={12} sm={12} md={4}>

                  <Box className={classes.text}>

                    <FormControl variant="outlined" fullWidth>
                      <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Name"
                        name="name"
                        value={values.name}
                        error={Boolean(touched.name && errors.name)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </FormControl>
                    <FormHelperText
                      error
                      style={{
                        margin: "0px",
                        fontSize: "12px",
                        color: "red",
                      }}
                    >
                      {touched.name && errors.name}
                    </FormHelperText>



                    <TextField className={classes.text}
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <FormHelperText
                      error
                      style={{
                        margin: "0px",
                        fontSize: "12px",
                        color: "red",
                      }}
                    >
                      {touched.email && errors.email}
                    </FormHelperText>

                    <TextField className={classes.text}
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      placeholder="Message"
                      name="message"
                      value={values.message}
                      error={Boolean(touched.message && errors.message)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <FormHelperText
                      error
                      style={{
                        margin: "0px",
                        fontSize: "12px",
                        color: "red",
                      }}
                    >
                      {touched.message && errors.message}
                    </FormHelperText>
                  </Box>

                </Grid>
<Grid item xs={12} md={3}></Grid>
              </Grid>
              
              <Grid container>
                <Grid item md={8} sm={8} xs={8}>
                  <Box className={classes.text1}>
                    <Typography variant="h1">GET </Typography>
                    <Typography variant="h2">  IN TOUCH</Typography>

                  </Box>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <Button variant="outlined" type="submit" className={classes.btn}>
                    SEND
                  </Button>
                </Grid>
              </Grid>

            </Container>
          </Form>
        )}
      </Formik>
      <Divider />

      <Box className={classes.FooterSubPart1}>
        <Typography variant="body2">Copyright 2022 All Right Reserved By SG</Typography>

      </Box>

    </div>
  );
};

export default Footer;
