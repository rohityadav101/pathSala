import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainUserInfoBox: {
    background: "#021850",
    padding: "20px",
    borderRadius: "30px",
  },
}));
export default function DownLoad() {
  const classes = useStyles();
  return (
    <Box className={classes.mainUserInfoBox}>
      <Container maxWidth="md">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" style={{ color: "#fff" }}>
              Download Career App Now!
            </Typography>
            <Box pt={1}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. Maecenas diam in posuere
                pellentesque congue eu gravida. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet
              </Typography>
            </Box>
            <Box pt={2}>
              <Typography variant="body1">
                consectetur. Maecenas diam in posuere pellentesque congue eu
                gravida.
              </Typography>
            </Box>
            <Box mt={1} style={{ marginLeft: "-13px" }} display="flex">
              <Box>
                <img src="images/gplay.png" width="150px" alt="" />
              </Box>
              <Box>
                <img src="images/iplay.png" width="150px" alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box align="center">
              <img src="images/ipone.png" alt="" width="350px" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
