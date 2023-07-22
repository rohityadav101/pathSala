import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import H2hCard from "src/component/H2hCard";

const useStyles = makeStyles((theme) => ({
  UpComingBox: {
    padding: "20px 0px",
    overflow: "hidden",
    zIndex: "9",
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
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding: "40px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      padding: "30px 0px",
    },
    "& img": {
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100% !important",
      },
    },

    "& .textbox": {
      "& .textImg": {
        width: "auto",
        maxWidth: "600px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
      },
    },
  },

  marginleft: {
    marginLeft: "10px !important",
  },
}));

const cardDetails = [
  {
    img: "images/ind.png",
  },
  {
    img: "images/ind.png",
    notbet: "fasle",
  },
  {
    img: "images/ind.png",
    notbet: "fasle",
  },
  {
    img: "images/ind.png",
    notbet: "fasle",
  },
];
export default function UpComing({ head }) {
  const classes = useStyles();
  const [tabs, setTabs] = useState("Live");
  const [openModal, setOpenModal] = useState(false);
  return (
    <Box className={classes.UpComingBox}>
      <Paper className="MainPaperBox" style={{ padding: "20px" }} elevation={2}>
        <Box className="displaySpacebetween">
          <Typography variant="h6">{head}</Typography>
          <Typography style={{ color: "#5A75D7" }} variant="h6">
            See all
          </Typography>
        </Box>
        <Divider className="hrLine" style={{ top: "50px" }} />
        <Box pt={2}>
          <CardSection
            cardDetails={cardDetails}
            setOpenModal={setOpenModal}
            type="Live"
          />
        </Box>
      </Paper>
    </Box>
  );
}

export const CardSection = ({ type, cardDetails, setOpenModal }) => {
  return (
    <>
      <Grid container spacing={3}>
        {cardDetails.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <H2hCard setOpenModal={setOpenModal} data={data} type={type} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
