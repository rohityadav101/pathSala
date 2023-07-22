import {
  Avatar,
  Box,
  Divider,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import WalletSendModal from "src/component/WalletSendModal";
import WalletReciveModal from "./WalletReciveModal";

const useStyles = makeStyles((theme) => ({
  walletcardBox: {
    background: "#FF6600",
    borderRadius: "5px",
    transition:"0.5s",
    position:"relative",
    zIndex:"999",
    "&:hover":{
        transform:"translateY(-5px)"
    },
    "& .paddinBox": {
      padding: "15px",
    },
    "& .icon1":{
        "& .MuiIconButton-root":{
            background:"#008000",
            padding:"6px",
        }
    },
    "& .icon2":{
        "& .MuiIconButton-root":{
            background:"#FF0000",
            padding:"6px",
        }
    }
  },
}));
export default function WalletCards() {
  const classes = useStyles();
  const [opendialog , setOpendialog]=useState(false);
  const [opendialogmodal , setOpendialogmodal]=useState(false);

  return (
    <Box className={classes.walletcardBox}>
      <Box className="paddinBox">
        <Box className="displayStart">
          <Avatar src="images/walleticon.png" />
          <Box ml={2}>
            <Typography variant="h5" color="primary">
              USDT (TRC-20)
            </Typography>
          </Box>
        </Box>
        <Box className="displaySpacebetween" mt={3}>
          <Typography variant="body2" color="primary">
            Available Balance :
          </Typography>
          <Typography variant="h6" color="primary">
            0.0002
          </Typography>
        </Box>
        <Box className="displaySpacebetween" my={0.5}>
          <Typography variant="body2" color="primary">
            In Order Balance :
          </Typography>
          <Typography variant="h6" color="primary">
            0.0014
          </Typography>
        </Box>
        <Box className="displaySpacebetween">
          <Typography variant="body2" color="primary">
            Total Balance :
          </Typography>
          <Typography variant="h6" color="primary">
            0.0012
          </Typography>
        </Box>
      </Box>
      <Box>
        <Divider
          style={{
            width: "100%",
            background: "#636262",
          }}
        />
      </Box>
      <Box className="paddinBox">
        <Box className="displayStart">
          <Box className="icon1">
            <IconButton onClick={()=>setOpendialog(true)}>
              <BsArrowUpRight />
            </IconButton>
          </Box>

          <Box ml={2} className="icon2">
            <IconButton  onClick={()=>setOpendialogmodal(true)}>
              <BsArrowDownLeft />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <WalletSendModal setOpendialog={setOpendialog} opendialog={opendialog} />
      <WalletReciveModal setOpendialogmodal={setOpendialogmodal} opendialogmodal={opendialogmodal} />
    </Box>
  );
}
