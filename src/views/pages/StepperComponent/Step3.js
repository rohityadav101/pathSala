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
    backgroundColor: "#78C600",
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
export default function Step3() {
  const classes = useStyles();
  return (
    <Box className={classes.mainPersonalBox}>
      <Grid container spacing={3}>
        <Grid item sm={7}>
          <Box>
            <Box>
              <Typography variant="h6">Great!! </Typography>
            </Box>
            <Typography variant="body1">
              Our career counsellor will be always in touch with you to help you
              to choose best match for you. Track your application/admission
              status.
            </Typography>
          </Box>
          <Box  className={classes.mixhype}>
            <Box py={2}>
              <Button variant="contained" color="primary">
              Upload documents                ---<BsChevronRight/>
              </Button>
              <Box pt={1}>
                <Typography variant="body1">
                Upload your documents to process your admission to applied universities.
                </Typography>
              </Box>
            </Box>
            <Box pt={1}>
              <Button variant="contained" color="secondary">
              Track admission/application status  ---<BsChevronRight/>
              </Button>
              <Box pt={1}>
                <Typography variant="body1">
                Apply to your dream destination and universities and track the progress of getting there.
                </Typography>
              </Box>
            </Box>
          
          </Box>
          <Box pt={10}>
            <Grid container spacing={3}>
              <Grid item sm={5}>
                <Button
                  variant="contained"
                  
                  color="Primary"
                >
                  More about yourself ---<BsChevronRight/>
                </Button>
              </Grid>
              <Grid item sm={7}>
                <Box
                  className="progressbarbox"
                  display="flex"
                  alignItems="center"
                >
                  <Typography
                    variant="body1"
                    style={{
                      color: "#1A3353",
                      fontSize: "12px",
                      fontWeight: "500",
                      whiteSpace: "pre",
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
                        whiteSpace: "pre",
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
          <img src="images/step3.png" width="100%" alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}
