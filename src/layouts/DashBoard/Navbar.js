import { Box, Button, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import {
  AiFillBell,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineMenuFold,
  AiOutlineUser,
} from "react-icons/ai";

const useStyle = makeStyles((theme) => ({
  NavbarBox: {
    background: "#021850",
    height: "100vh",
    padding: "0px ",
    display: "flex",
    borderRadius: "15px",
    "& .sideHomeBox": {
      width: "45px",
      background: "#1D5EF4",
      height: "100vh",
      borderRadius: "15px",
      padding: "0px 10px",
    },

    "& .iconBox": {
      background: "#ECEEF0",
      color: "#1D5EF4",
      borderRadius: "13px",
      padding: "8px",
      marginBottom: "20px",
    },
    "& .iconBox2": {
      borderRadius: "13px",
      padding: "8px",
      marginBottom: "20px",
    },
  },
}));

export default function Navbar({ setOpen, open }) {
  const classes = useStyle();
  return (
    <Box className={classes.NavbarBox}>
      <Box className="sideHomeBox">
        <IconButton
          className="iconBox2"
          onClick={() => setOpen(!open)}
          style={{ marginTop: "15px", marginBottom: "20px" }}
        >
          <AiOutlineMenuFold />
        </IconButton>

        <Box className="menuBox">
          <IconButton className="iconBox">
            <AiOutlineHome />
          </IconButton>
          <IconButton className="iconBox2">
            <AiOutlineUser />
          </IconButton>
        </Box>
      </Box>
      {open && (
        <Box ml={1} mt={2}>
          <Box mb={2}>

          <img src="images/mycare.png" width="90%" alt="logo" />
          </Box>
          <Box>
            <Button className="sidebarButton">Home</Button>
            <Button className="sidebarButton1">profile</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
