import React, { useState } from "react";
import {
  makeStyles,
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
  FormControl,
  Typography,
  TextField,
  Checkbox,
  Box,
  Button,
  Avatar,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { IoClose } from "react-icons/io5";
const useStyles = makeStyles((theme) => ({
  annualModalBox: {
    // padding: "30px",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& .MuiSelect-selectMenu": {
      fontSize: "14px",
    },
    "& .paymentimg": {
      width: "60px",
      height: "60px",
    },
    "& .centerText": {
      background: theme.palette.background.blackCard,
      border: "1px solid #414040",
      padding: "15px",
      borderRadius: "10px",
      "& img": {
        width: "auto",
        maxWidth: "90px",
      },
    },
  },

  cancelBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    "& svg": {
      // color: "#fff",
      fontWeight: "700",
    },
  },
}));

function AnualModal({ anualOpen, setAnualOpen }) {
  const classes = useStyles();
  const [checkout, setCheckout] = React.useState(false);

  const [age, setAge] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Dialog
        open={anualOpen}
        onClose={() => setAnualOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <IconButton
          className={classes.cancelBtn}
          onClick={() => setAnualOpen(false)}
        >
          <IoClose />
        </IconButton>
        <Box className={classes.annualModalBox}>
          <Typography
            variant="body2"
            color="primary"
            style={{ fontSize: "17px" }}
          >
            Subscription for an annual light
          </Typography>
          <Box mt={3} pb={2} className="centerText1" align="left">
            <Typography variant="body2" style={{ fontSize: "13px" }}>
              Please make a transfer to the following address:
            </Typography>
          </Box>
          <Box className="centerText ">
            <Box>
              <Typography variant="body2" color="primary">
                USDT.TRC20 address recepient:
              </Typography>
            </Box>
            <Box mt={1} className="displaySpacebetween">
              <Typography variant="h6" color="primary">
                TSRdhshdjhfjvhudfjsdsdskcxjhcuxcjx dhjshdhshs
              </Typography>
              <Box style={{ background: "#FF6600" }}>
                {" "}
                <img src="images/scanner.png" alt="iamges" />
              </Box>
            </Box>

            <Box>
              <Typography variant="body2" color="primary">
                Amount:
              </Typography>
            </Box>
            <Box className="displayStart">
              <Typography variant="h6" color="primary">
                173.5595
              </Typography>
              &nbsp;&nbsp;
              <Typography variant="body2" color="primary">
                USDT.TRC20
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="primary">
                Sales TAX / VAT included
              </Typography>
            </Box>
            <Box mt={2} mb={2}>
              <Typography variant="body2" style={{ color: "#FF5858" }}>
                Network Fee is not included in the payment
              </Typography>
            </Box>
            <Typography variant="body2" color="primary">
              Network Fees and Fees for transfer/withdraw from the wallet or
              exchange are calculated depending on the type of network used.
              Make sure you have enough necessary coins to pay the fees.
            </Typography>
          </Box>

          <Box mt={2} mb={1}>
            <Typography variant="body2" color="secondary">
              Address available within:
            </Typography>
            <Box mt={1} mb={1}>
              <Typography variant="h6" color="secondary">
                01:58:44
              </Typography>
            </Box>

            <Typography variant="body1" color="secondary">
              Subscription activation time after payment depends on the currency
              network speed
            </Typography>
            <Box mt={1} mb={7}>
              <Typography variant="body1" style={{ color: "#FF6600" }}>
                Check transaction status
              </Typography>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default AnualModal;
