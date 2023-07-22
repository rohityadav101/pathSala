import {
    Box,
    Button,
    Grid,
    LinearProgress,
    Typography,
    makeStyles,
    withStyles,
  } from "@material-ui/core";
  import React from "react";
import { BsChevronRight } from "react-icons/bs";
  const BorderLinearProgress = withStyles((theme) => ({
      root: {
        height: 10,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor: "#D0D4D7",
      },
      bar: {
        borderRadius: 5,
        backgroundColor: '#78C600',
      },
    }))(LinearProgress);
  
  const useStyles = makeStyles((theme) => ({
    mainPersonalBox: {
      "& h6": {
        color: "#72849A",
        fontWeight: "700",
        fontSize: "14px",
      },
      "& .progressbarbox": {
        border: "1px solid #BAD7FF",
        padding: "8px 15px",
        background: "#3E79F71A",
        borderRadius: "10px",
      },
    },
    mixhype:{
      paddingLeft: "50px",
      [theme.breakpoints.down("md")]:{
        paddingLeft: "0px"
      }
    }
  }));
  export default function Step2() {
    const classes = useStyles();
    return (
      <Box className={classes.mainPersonalBox}>
        <Grid container spacing={3}>
          <Grid item sm={7}>
            <Box>
              <Typography variant="body1">
              Explore universities and get to know your best fit one. Our career counsellor
          will help you find the best fit and will provide you with the best possible advice for your career.
              </Typography>
            </Box>
            <Box className={classes.mixhype} style={{  }}>
              <Box py={2}>
               <Button variant="contained" color="primary">Request your Career Counsellor ---<BsChevronRight/> </Button>
               <Box pt={1}>
               <Typography variant="body1">
               Send a request for allotment of career counsellor for complete guidance in studying abroad to top universities.
                </Typography>
               </Box>
              </Box>
              <Box >
               <Button  variant="contained" color="secondary">Academic/Education Details ---<BsChevronRight/> </Button>
               <Box pt={1}>
               <Typography variant="body1">
               Fill your academic/educations details in profile section.
                </Typography>
               </Box>
              </Box>
              <Box pt={2} pb={4} >
               <Button variant="contained" color="secondary">Shortlist courses and universities. Apply to Universities </Button> 
               <Box pt={1}>
               <Typography variant="body1">
               Fill your academic/educations details in profile section.
                </Typography>
               </Box>
              </Box>
            </Box>
            <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={12} lg={5}>
                <Button
                  variant="contained"
                
                  color="Primary"
                  fullWidth
                >
                  More about yourself ---<BsChevronRight/>
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={12} lg={7}>
                <Box className="progressbarbox" display="flex" alignItems="center">
                  <Typography
                    variant="body1"
                    style={{
                      color: "#1A3353",
                      fontSize: "12px",
                      fontWeight: "500",
                      whiteSpace:"pre"
                    }}
                  >
                    In-Progress
                  </Typography>
                  <Box ml={1} width="100%">

                  <BorderLinearProgress variant="determinate" value={30} />
                  </Box>
                  <Box ml={1}>

                  <Typography
                    variant="body1"
                    style={{
                      color: "#1A3353",
                      fontSize: "12px",
                      fontWeight: "500",
                      whiteSpace:"pre"
                    }}
                  >
                    30%
                  </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            </Box>
          </Grid>
          <Grid item sm={5}>
              <img src="images/step2.png" width="100%" alt="" />
          </Grid>
        </Grid>
      </Box>
    );
  }
  