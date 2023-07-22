import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Hidden,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { BsArrowRightCircle, BsChevronRight } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  mainWelcomeScreenBox: {
    "& .MainPaperBox": {
      position: "relative",
      padding: "10px 20px",
    },
    "& .hrLine": {
      position: "absolute",
      top: "auto",
      left: "-1px",
      width: "100%",
    },
    "& .mixBox":{
      padding:"32px 0px",
      position:"relative",
      zIndex:"999",
      [theme.breakpoints.down("xs")]:{
        padding:"12px 0px 45px",
      }

    },
    "& .ButtonBox": {
      padding: "9px",
      borderRadius: "100px",
      background: "#D8DDEC",
      "& h6": {
        color: "#3E53A0",
        fontSize: "14px",
        fontWeight: "700",
      },
    },
  },
}));
export default function WelcomeScreen() {
  const classes = useStyles();
  return (
    <Box className={classes.mainWelcomeScreenBox}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <Paper className="MainPaperBox" elevation={2}>
          <Hidden xsDown>
          <img
              src="images/name.png"
              alt=""
              style={{
                position: "absolute",
                right: "10px",
                width: "150px",
                zIndex: "2",
              }}
            />
          </Hidden>
           
            <Typography variant="h6">Welcome! Kumar</Typography>
            <Divider className="hrLine" style={{ top: "45px" }} />
            <Box  className="mixBox"  maxWidth="430px">
              <Typography variant="body1">
                Unlock the world of opportunities with mycareerpathshala and
                find your dream destination to study abroad.
              </Typography>
            </Box>
            <Divider className="hrLine" style={{ top: "129px" }} />
            <Box>
              <Button variant="contained" color="primary">
                Request your Career Counsellor ---<BsChevronRight/>
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Paper className="MainPaperBox" elevation={2}>
            <Typography variant="h6">
              Building tomorrow using technology
            </Typography>
            <Divider className="hrLine" style={{ top: "45px" }} />
            <Box mt={3}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Box className="ButtonBox displaySpacebetween">
                    <Box display="flex" alignItems="center">
                      <Avatar
                        style={{ height: "30px", width: "30px",background:"#3E53A0" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                      />
                      <Box ml={2}>
                        <Typography  color="#3E53A0" variant="h6">NEET Counselling</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BsArrowRightCircle
                        style={{
                          fontSize: "25px",
                          color: "#3E53A0",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box style={{background:"#DEE3F7"}} className="ButtonBox displaySpacebetween">
                    <Box display="flex" alignItems="center">
                      <Avatar
                        style={{ height: "30px", width: "30px",background:"#5A75D7" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                      />
                      <Box ml={2}>
                        <Typography style={{color:"#5A75D7"}} variant="h6">IMAT Path</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BsArrowRightCircle
                        style={{
                          fontSize: "25px",
                          color: "#5A75D7",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box style={{background:"#FFF3E8"}} className="ButtonBox displaySpacebetween">
                    <Box display="flex" alignItems="center">
                      <Avatar
                        style={{ height: "30px", width: "30px",background:"#FA8C16" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                      />
                      <Box ml={2}>
                        <Typography style={{color:"#FA8C16"}} variant="h6">Events</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BsArrowRightCircle
                        style={{
                          fontSize: "25px",
                          color: "#FA8C16",
                          marginTop: "5px",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
