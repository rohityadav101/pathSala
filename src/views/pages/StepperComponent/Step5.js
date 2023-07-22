import {
  Box,
  Button,
  Grid,
  Hidden,
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
export default function Step5() {
  const classes = useStyles();
  return (
    <Box className={classes.mainPersonalBox}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={7}>
          <Box>
            <Box>
              <Typography variant="h6">
                Apply your study visa with mycareerpathshala.
              </Typography>
            </Box>
            <Typography variant="body1">
              Getting visa for studying abroad increases by 90% when applying
              with us.
            </Typography>
          </Box>
          <Box className={classes.mixhype}>
            <Box py={2}>
              <Button variant="contained" color="primary">
                Upload documents --- <BsChevronRight/>
              </Button>
              <Box pt={1}>
                <Typography variant="body1">
                  Upload your documents to process your VISA.{" "}
                </Typography>
              </Box>
            </Box>
            <Box pt={1}>
              <Button variant="contained" color="secondary">
                Track VISA status ---<BsChevronRight/>
              </Button>
            </Box>
          </Box>
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <Button
                  variant="contained"
                
                  color="Primary"
                
                >
                  Submit your Application ---<BsChevronRight/>
                </Button>
              </Grid>
             
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
        <Hidden smDown>
        <img
            src="images/step5.png"
            style={{
              position: "absolute",
              width: "300px",
              right: "0",
              bottom: "0",
            }}
            width="100%"
            alt=""
          />
        </Hidden>
     
        </Grid>
      </Grid>
    </Box>
  );
}
