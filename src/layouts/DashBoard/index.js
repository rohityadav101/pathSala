import { Box, Hidden, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import Dashboard from "src/views/pages/dashboard/Dashboard";
import PhoneNav from "./PhoneNav";

const useStyle = makeStyles((theme) => ({
  createAccountBox: {
    display: "flex",

    "& .sideBox": {
      width: "100%",
    },
    "& .scrollDiv": {
      "height": "calc(100vh - 145px)",
      "overflowY": "auto",
      "overflowX": "hidden",
      "padding": "50px 20px 20px"
    },
  },
}));

export default function () {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
    const [state, setState] = React.useState(false);
  const toggleDrawer = ( open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState( open );
  };
  return (
    <Box className={classes.createAccountBox}>
      <Hidden mdDown>

      <Box
        style={
          open
            ? { width: "20%", transition: "0.3s all ease-in-out" }
            : { width: "66px", transition: "0.3s all ease-in-out" }
        }
      >
        <Navbar setOpen={setOpen} open={open} />
      </Box>
      </Hidden>
      <Box className="sideBox">
        <Topbar setState={setState} state={state} toggleDrawer={toggleDrawer}  />
        <PhoneNav setState={setState} state={state} toggleDrawer={toggleDrawer} />
     <Box className="scrollDiv">

        <Dashboard />
     </Box>

       
      </Box>
    </Box>
  );
}
