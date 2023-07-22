import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const useStyle = makeStyles((theme) => ({
  MainCardBox: {
    borderRadius: "15px",
    cursor:"pointer",
    transition:"0.6s ease all",
    backgroundColor: "#eceef0 !important",
    "&:hover":{
      boxShadow:"5px 5px 20px #000",

    },
    "& .mainBoxBottom": {
      padding: "15px",
    },
  },
  mainimg: {
    width: "100%",
    height: "auto !important",
    overflow: "hidden",
    position: "relative",
    height: "200px !important",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: " no-repeat !important",
    borderRadius: "15px 15px 0px 0px",
    backgroundColor: "rgba(255, 255, 255, 0.03) !important",
  },
}));

export default function MainCard({ data, type, index, setOpenModal }) {
  const classes = useStyle();
  const history = useHistory();
  const updateDimensions = () => {
    var offsetWidth = document.getElementById("imagecard" + index).offsetWidth;
    var newoofsetWidth = offsetWidth - 80;
    document.getElementById("imagecard" + index).style.height =
      newoofsetWidth + "px";
  };

  useEffect(() => {
    if (data || index) {
      updateDimensions();
    }
  });
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  });

  return (
    <Box className={classes.MainCardBox}>
      <Box
        id={`imagecard${index}`}
        className={classes.mainimg}
        style={
          type === "Live"
            ? { background: "url(" + data.img + ")", cursor: "pointer" }
            : {}
        }
        // onClick={() => {
        //   history.push("/");
        // }}
      ></Box>
      <Box className="mainBoxBottom">
        <Box
          style={{
            background: "#fff",
            width: "fit-content",
            padding: "1px 10px",
          }}
        >
          <Typography variant="body1">Global Ed.</Typography>
        </Box>
        <Box py={1}>
          <Typography variant="body1" style={{ color: "#3E53A0" }}>
            Lorem ipsum dolor sit amet consectetur. Viverra egestas enim a
            tortor lacus.
          </Typography>
        </Box>
        <Typography variant="body2">07-06-2023</Typography>
      </Box>
    </Box>
  );
}
