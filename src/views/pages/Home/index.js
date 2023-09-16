import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import Middle from "./Middle";


function Home(props) {
  return (
    <Page title="Ecommerce Site">
      <Box>
        <Banner/>
      <Middle /> 
      </Box>
    </Page>
  );
}

export default Home;
