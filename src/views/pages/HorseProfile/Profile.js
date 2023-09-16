import React, { useState } from "react";
import { Box, makeStyles, Grid, Container, Typography, Button } from "@material-ui/core";
import { RiShieldCheckFill } from "react-icons/ri";
import Page from "src/component/Page";
import Info from "./Info";
import NFTActivity from "./NFTActivity";
import Club from "./Club";
import Competition from "./Competition";



const useStyles = makeStyles((theme) => ({
    root: {
        "& .ProileImg": {
            position: "relative",
            "& .editicon1": {
                position: "absolute",
                bottom: "10px",
                right: "10px",
                backgroundColor: "#FFF",
                [theme.breakpoints.down("xs")]: {
                    width: "30px",
                    height: "30px",
                },
            },
            "& .postImg": {
                width: "100%",
                margin: "16px 0",
                overflow: "hidden",
                "& img": {
                    width: "100%",
                    height: "250px",
                    "@media(max-width:767px)": {
                        height: "130px",
                    },
                },
            },
        },
        "& .userProfile": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-20px",
            "& .editprofile": {
                position: "absolute",
                bottom: "0px",
                right: "0px",
            },
            "& figure": {
                width: "100%",
                maxWidth: "130px",
                height: "130px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                background:
                    "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
                backdropFilter: " blur(42px)",
                border: "3px solid #161616",
                background: "rgb(42 123 135)",
                "@media(max-width:767px)": {
                    maxWidth: "75px",
                    height: "75px",
                    marginTop: "-10px",
                },
            },
            "& .user": {
                position: "absolute",
                marginLeft: "15px",
                "& .editprofileicon": {
                    background: "#FFF !important",
                    position: "absolute",
                    right: "0px",
                    bottom: "-60px",
                    left: "100px",
                    background: "#fff",
                    "@media(max-width:767px)": {
                        width: "20px",
                        height: "20px",
                        bottom: "-20px",
                        left: "80px",
                    },
                },
                "& img": {
                    width: "100%",
                },
            },
        },
        "& .Nametext": {
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: "32px",
            "@media(max-width:767px)": {
                paddingTop: "0px"
            },
            "& .Name": {
                display: 'flex',
                alignItems: "center",
                paddingTop: "10px"
            }
        }
    }
}));


function Profile(props) {
    const classes = useStyles();
    const [tabview, setTabView] = useState("Info");
    return (
        <Box className={classes.root}>
            <Page title="Horse Profile | Info">
                <Box>
                    <Box className="ProileImg">
                        <figure className="postImg">
                            <img src="images/HorseProfile.png" alt="Horse Profile Images" />
                        </figure>
                    </Box>
                    <Container maxWidth="md">
                        <Grid container spacing={2} direction={"column"}>
                            <Grid item xs={12} lg={12} align="center">
                                <Box className="userProfile">
                                    <figure className="user">
                                        <img src="images/ProfileImg.png" alt="Profile Image" />
                                    </figure>
                                    <Box className={classes.iconbox}>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={12} align="center">
                                <Box className="Nametext">
                                    <Box className="Name">
                                        <Typography variant="h2" >Rapid Stone</Typography>{" "}
                                        <RiShieldCheckFill />
                                    </Box>
                                    <Box className="Name">
                                        <Typography variant="h6">  Created by: </Typography>{" "}&nbsp;
                                        <Typography variant="h6">OmniHorse <RiShieldCheckFill /></Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={12} align="center">
                                <Box>
                                    <Typography variant="body2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5} md={4} lg={4}>

                        </Grid>
                        <Grid item xs={12} sm={7} md={8} lg={8}>
                            <Box>
                                <Button
                                    className={tabview === "Info" ? "active" : " "}
                                    onClick={() => setTabView("Info")}
                                >
                                    Info
                                </Button>
                                <Button
                                    className={tabview === "NFTActivity" ? "active" : " "}
                                    onClick={() => setTabView("NFTActivity")}
                                >
                                    NFTActivity
                                </Button>
                                <Button
                                    className={tabview === "Club" ? "active" : " "}
                                    onClick={() => setTabView("Club")}
                                >
                                    Club
                                </Button>
                                <Button
                                    className={tabview === "Competition" ? "active" : " "}
                                    onClick={() => setTabView("Competition")}
                                >
                                    Competition
                                </Button>
                            </Box>
                            <Box className="rightbox">
                                {tabview === "Info" ? <Info /> : ""}
                                {tabview === "NFTActivity" ? <NFTActivity /> : ""}
                                {tabview === "Club" ? <Club /> : ""}
                                {tabview === "Competition" ? <Competition /> : ""}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Page>
        </Box>
    );
}

export default Profile;
