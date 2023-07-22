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
export default function YourPersonal() {
  const classes = useStyles();
  return (
    <Box className={classes.mainPersonalBox}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={7}>
          <Box>
            <Typography variant="body1">
              Welcome!! Explore universities, courses of your choice. Save,
              shortlist and compare your choice of interest.
            </Typography>
          </Box>
          <Box  className={classes.mixhype}>
            <Box py={2}>
              <Typography variant="h6">Wait is over</Typography>
              <Typography variant="body1">
                Boost your career with immense opportunities in abroad, with
                world class infrastructure and best education system.
              </Typography>
            </Box>
            <Box py={2}>
              <Typography variant="h6">Tell us more about yourself</Typography>
              <Typography variant="body1">
                We need some information to help you in finding best
                universities for you.{" "}
              </Typography>
            </Box>
          </Box>
          <Box pt={10}>
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
        <Grid item sm={12} md={5}>
            <img src="images/step1.png" width="100%" alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}
