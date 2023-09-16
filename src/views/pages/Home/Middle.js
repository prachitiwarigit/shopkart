import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, Button } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Card, Divider, Grid } from "@material-ui/core";
import { useState } from "react";
import Cardmap from "./Cardmap";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
    paddingTop: "20px",
  },

  main: {
    marginTop: "40px",
    "& h1": {
      fontSize: "60px",
      fontWeight: "600",
    },
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [categories, setCategoryData] = useState([]);
  const [product, setProduct] = useState([]);
  const [tabView, setTabView] = useState("electronics");

  console.log("product---", product);

  const getapidata = async () => {
    const response = await axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    });
    if (response) {
      console.log("response", response?.data);
      setProduct(response?.data);
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories", {
      method: "Get",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCategoryData(data);
      })
      .catch((e) => {
        alert("Exception", e);
      });

    getapidata();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Box className={classes.main}>
          <Typography variant="h1">New products</Typography>
          <Divider style={{ width: "35%", color: "#000" }} />
        </Box>
        <Box className={classes.root}>
          <Grid container>
            <Grid item md={3} lg={3} sm={3}>
              {categories?.map((item, index) => {
                return (
                  <Button  style={{marginTop:"20px"}}
                    variant="contained"
                    onClick={() => setTabView(item)}
                    index
                    color="primary"
                  >
                    {item}
                  </Button>
                );
              })}
            </Grid>
            <Grid item md={9} lg={9} sm={12}>
              <Cardmap
                product={product.filter((items) => items.category === tabView)}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
