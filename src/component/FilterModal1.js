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
  Box,
  Button,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { IoClose } from "react-icons/io5";
const useStyles = makeStyles((theme) => ({
  filterModalBox: {
    // padding: "30px",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& .MuiSelect-selectMenu": {
      fontSize: "14px",
    },
    "& .textBox": {
      "& .MuiInputBase-root": {
        background: "transparent",
        boxShadow: "none",
        color: theme.palette.text.white,
        borderRadius: "0px !important",
        fontSize: "14px",
        height: "33px",
      },
      "& .MuiInput-underline:before": {
        left: "0",
        right: "0",
        bottom: "0",
        content: '"\\00a0"',
        position: "absolute",
        transition:
          "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderBottom: "1px solid gray",
        pointerEvents: "none",
      },
    },
    "& .buttonBox": {
      padding: "50px 0",
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
  dialog: {
    position: "absolute",
    right: 0,
  },
}));

function FilterModal1({ open, setOpen }) {
  const classes = useStyles();
  const [checkout, setCheckout] = React.useState(false);
  const handleOpenCheckOut = () => {
    setCheckout(true);
    setOpen(false);
  };
  const [age, setAge] = React.useState("1");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age1, setAge1] = React.useState("1");

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const [age2, setAge2] = React.useState("1");

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const [age3, setAge3] = React.useState("1");

  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };

  return (
    <>
      <Dialog
       classes={{
        paper: classes.dialog,
      }}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <Box className={classes.filterModalBox}>
          <Typography variant="h6" color="primary">
            Apply Filters
          </Typography>
          <Box mt={3} pb={2} style={{ borderBottom: "1px solid gray" }}>
            <Typography
              variant="body2"
              style={{ color: "#FF6600", fontSize: "18px" }}
            >
              Primary Filter
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography variant="body2" color="primary">
              From exchange (Max 10 exchange)
            </Typography>
            <Box mt={1}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                >
                 <MenuItem value="1">Select Exchange</MenuItem>
                  <MenuItem value="Binance">Binance</MenuItem>
                  <MenuItem value="Bitstamp">Bitstamp</MenuItem>
                  <MenuItem value="Kraken">Kraken</MenuItem>
                  <MenuItem value="OKEX">OKEX</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          {/* <Box align="center" mt={1}>
            <IconButton>
              <img src="images/exchange_icon.png" alt="icon" />
            </IconButton>
          </Box> */}

          <Box mt={2}>
            <Typography
              variant="body2"
              style={{ color: "#FF6600", fontSize: "18px" }}
            >
              Secondary Filter
            </Typography>
            <Box>
              <TextField
                className="textBox"
                id="standard-basic"
                placeholder="(This filters are applied locally on the current list)"
              />
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="body2" color="primary">
              Coin
            </Typography>
            <Box mt={1}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age1}
                  onChange={handleChange1}
                >
                   <MenuItem value="1">Select Coin</MenuItem>
                  <MenuItem value="Binance">ETH</MenuItem>
                  <MenuItem value="Bitstamp">BTC</MenuItem>
                  <MenuItem value="Kraken">BNB</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="body2" color="primary">
              From market
            </Typography>
            <Box mt={1}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age2}
                  onChange={handleChange2}
                >
                   <MenuItem value="1">Select Coin</MenuItem>
                  <MenuItem value="Binance">ETH</MenuItem>
                  <MenuItem value="Bitstamp">BTC</MenuItem>
                  <MenuItem value="Kraken">BNB</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="body2" color="primary">
              To market
            </Typography>
            <Box mt={1}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age3}
                  onChange={handleChange3}
                >
                  <MenuItem value="1">Select Coin</MenuItem>
                  <MenuItem value="Binance">ETH</MenuItem>
                  <MenuItem value="Bitstamp">BTC</MenuItem>
                  <MenuItem value="Kraken">BNB</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box className="displayCenter buttonBox">
            <Button
              variant="contained"
              color="primary"
              // component={Link}
              // to="/dashboard"
            >
              Apply
            </Button>{" "}
            &nbsp;&nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(false)}
              style={{ background: "#636363" }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default FilterModal1;
