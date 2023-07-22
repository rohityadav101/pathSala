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
    },
    "& .progressbarbox": {
      border: "1px solid #BAD7FF",
      padding: "8px 15px",
      background: "#3E79F71A",
      borderRadius: "10px",
    },
    "& .baseBox":{
        background:"#3E79F74D",
      
        border:" 1px solid #6296DF",
        borderRadius:"30px",
        height: "92px",
    paddingTop: "5px",
    }
  },
  mixhype:{
    paddingLeft: "50px",
    [theme.breakpoints.down("md")]:{
      paddingLeft: "0px"
    }
  }
}));
export default function Step4() {
  const classes = useStyles();
  return (
    <Box className={classes.mainPersonalBox}>
      <Grid container spacing={3}>
        <Grid item lg={7} sm={7} md={12}>
     
          <Box >
          <Box>
            <Box>
              <Typography variant="h6"> Congratulations!! </Typography>
            </Box>
            <Typography variant="body1">
              You have been selected for admission to MBBS in Ukraine for
              session 2022-23 in:
            </Typography>
          </Box>
          <Box mt={2} style={{ marginleft: "20px" }} className="baseBox" display="flex" alignItems="center" justifyContent="space-between">
           <Box display="flex" alignItems="center">
           <Box >
            <img style={{border:"10px solid #fff",borderRadius:"30px 0px 0px 30px"}} src="images/mainblock.png" alt="" />
           </Box>
           <Box ml={2}>
           <Box>
           <Typography style={{color:"#1A3353", fontWeight:"700" }} variant="body1">MBBS in Ukraine</Typography>
           </Box>
           <Box>
           <Typography style={{color:"#1A3353", fontWeight:"500" }} variant="body1">Bukivinian State Medical Universitye</Typography>
           </Box>
           <Box>
           <Typography style={{color:"#1A3353", fontSize:"12px" }} variant="body1">Session : September 2022</Typography>
           </Box>
           </Box>
           </Box>
           <Hidden xsDown>

           <Box pr={2}>

           <Box display="flex" alignItems="center">
            <Box mr={1}>
                <img src="images/v1.png" alt="" />
            </Box>
            <Typography style={{whiteSpace:"pre"}} variant="body1">View Offer</Typography>
           </Box>
           <Box display="flex" alignItems="center">
            <Box mr={1}>
                <img src="images/v2.png" alt="" />
            </Box>
            <Typography style={{whiteSpace:"pre"}} variant="body1">Accept Offer</Typography>
           </Box>
           <Box display="flex" alignItems="center">
            <Box mr={1}>
                <img src="images/v3.png" alt="" />
            </Box>
            <Typography style={{whiteSpace:"pre"}} variant="body1">Reject Offer</Typography>
           </Box>
           </Box>
           </Hidden>

          </Box>
          </Box>
          <Box pt={4} align="center"> 
          <Button variant="contained" color="primary">Next  --- <BsChevronRight/> </Button>
          </Box>
        </Grid>
        <Grid item lg={5} sm={5} md={13}>
          <img src="images/step4.png" width="100%" alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}
