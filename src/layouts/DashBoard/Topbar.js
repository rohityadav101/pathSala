import { Box, Button, Hidden, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { AiFillBell, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";

const useStyle = makeStyles((theme) => ({
  TopbarBox: {
    background: "#ECEEF0",
    height: "40px",
    padding: "10px 20px",
    "& .displayBox": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
    },
    "& .iconBox": {
      background: "#F7F7F8",
      color: "#3E53A0",
      padding: "8px",
      boxShadow: "0px 4px 4px 0px #00000040",
    },
    "& .buttonBox": {
      height: "40px",
      padding: "12px 20px",
      borderRadius: "50px",
      color: "#3E53A0",
      fontWeight: "400",
      background: "#F7F7F8",
      boxShadow: "0px 4px 4px 0px #00000040 !important",
    },
  },
}));

export default function Topbar({setState,state , toggleDrawer }) {
  const classes = useStyle();
  return (
    <Box className={classes.TopbarBox}>
      <Box className="displayBox">
        <Box style={{display:"flex" , alignItems:'center', gap:"10px"}}>
          <Hidden lgUp >

          <IconButton onClick={toggleDrawer( true)}>
            <AiOutlineMenu/>
          </IconButton>
          </Hidden>
         

          <Button>
            Home
          </Button>
          </Box>
          <Box style={{display:"flex" , alignItems:'center', gap:"20px"}}>
        <IconButton className="iconBox">
          <AiFillBell />
        </IconButton>
        <Button variant="contained" className="buttonBox">
          <AiOutlineLogout
            style={{ transform: "rotate(-90deg)", color: "#3E53A0" }}
          />
          &nbsp; Logout
        </Button>
        </Box>
      </Box>
    </Box>
  );
}
