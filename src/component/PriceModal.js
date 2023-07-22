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
  pricerModalBox: {
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
    },
    "& .MuiIconButton-root":{
      padding:"0px 12px 12px 0px !important"
    }
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

function PriceModal({ open, setOpen, setAnualOpen }) {
  const classes = useStyles();
  const [checkout, setCheckout] = React.useState(false);

  const [age, setAge] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  const handleOpen = () => {
    setOpen(false);
    setAnualOpen(true);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <IconButton
          className={classes.cancelBtn}
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </IconButton>
        <Box className={classes.pricerModalBox}>
          <Typography
            variant="body2"
            color="primary"
            style={{ fontSize: "17px" }}
          >
            Depositing $1591.0
          </Typography>
          <Box mt={3} pb={2} className="centerText" align="center">
            <Typography
              variant="body2"
              color="primary"
              style={{ fontSize: "13px" }}
            >
              You are going to activate “Light” subscription for $1591.0 per
              month.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography
              variant="body2"
              color="primary"
              style={{ fontSize: "17px" }}
            >
              Your location
            </Typography>
            <Box mt={1}>
              <Typography variant="body1" color="primary">
                Please specify your country of residence and postal code. This
                information is required to ensure account and payment security,
                and to combat fraud.
              </Typography>
            </Box>
          </Box>

          <Box mt={2}>
            <Typography variant="body2" color="primary">
              Country*
            </Typography>
            <Box mt={1}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Select Country</MenuItem>
                  <MenuItem value={10}>India</MenuItem>
                  <MenuItem value={20}>America</MenuItem>
                  <MenuItem value={30}>USA</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box mt={2} mb={1}>
            <Typography variant="body2" color="secondary">
              Postal Code*
            </Typography>
            <Box mt={1}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Please enter code"
              />
            </Box>
          </Box>

          <Box mt={2} mb={1}>
            <Typography variant="body2" color="secondary">
              Choose a payment method
            </Typography>
            <Box mt={1}>
              <Avatar src="images/payment.png" className="paymentimg"></Avatar>
              <Box mt={1}>
                <Typography variant="body1" color="secondary">
                  Tether (USDT)
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mt={2}>
            <Checkbox  />
            <Typography variant="body1" color="secondary">
              I accept Terms of use and agree to payment amount and accept
              Recurring payment policy and Refund Policy
            </Typography>
          </Box>

          <Box className="displayCenter" mt={2}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Pay $1591.0
            </Button>{" "}
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default PriceModal;
