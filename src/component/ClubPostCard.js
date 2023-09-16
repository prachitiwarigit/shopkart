import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

function ClubPostCard() {
    const classes = useStyles();
    const { data, type, index } = props;
    const updateDimensions = () => {
        var offsetWidth = document.getElementById("imagecard" + index).offsetWidth;
        var newoofsetWidth = offsetWidth - 80;
        document.getElementById("imagecard" + index).style.height =
            newoofsetWidth + "px";
    };


    useEffect(() => {
        updateDimensions();
    }, [data, index]);
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return (
        <>
            <Paper className={classes.root}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} lg={4} md={4}>
                            <Box
                                id={`imagecard${index}`}
                                className={classes.mainimg}
                                style={{ background: "url(" + data.image + ")" }}
                                onClick={() => {
                                    history.push("/author");
                                }}
                            ></Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={8} md={8}>
                            <Box>
                                <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </Typography>
                            </Box>
                            <Box>
                                <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}

export default ClubPostCard;