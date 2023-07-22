import React, { useState, useEffect } from "react";
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
  Paper,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { IoClose } from "react-icons/io5";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getDataHandlerAPI } from "src/apiConfig/service";
import axios from "axios";
import apiConfigs from "src/apiConfig/ApiConfig";
// import Apiconfigs from "src/apiConfig/config";
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

  dropdown12: {
    borderRadius: "30px",
    // border: "1px solid #8585a0",
    width: "100%",
    maxHeight: "400px",
    "& .MuiFormControl-fullWidth": {
      borderRadius: "25px",
      border: "none !important",
    },
    "& .MuiOutlinedInput-root": {
      padding: "7px",
      border: "none !important",
    },
    "& .MuiOutlinedInput-input": {
      padding: "0",
    },
    "& .MuiInputLabel-formControl": {
      top: "-17%",
      left: "6%",
      position: "absolute",
      transform: "translate(0, 24px) scale(1)",
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

function ConnectModal({
  open,
  setOpen,
  filterData,
  setFilterData,
  setIsSearch,
  type,
}) {
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

  const [exchangeList, setExchangeList] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const token = window.localStorage.getItem("token");
  const getCurrentExchangeListHandler = async () => {
    try {
      const response = await getDataHandlerAPI("listExchange", token);
      if (response) {
        let exchangeListData = [];
        for (var i = 0; i < response.length; i++) {
          exchangeListData.push(response[i]?.uid);
        }
        setExchangeList(exchangeListData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getTokenListHandler = async (_id) => {
    try {
      const response = await axios({
        method: "GET",
        url: apiConfigs.exchangeCoins,
        headers: {
          token: token,
        },
        params: {
          uid: _id,
        },
      });
      if (response.data.responseCode === 200) {
        setCoinList(response.data.result.coins);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentExchangeListHandler();
  }, []);
  const closeFunction = () => {
    setFilterData({
      fromExchange: "",
      toExchange: "",
      toExchange1: "",
      startToken: "",
      capital: "",
      depth: 3,
    });
    setOpen(false);
    setIsSearch(false);
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
          <Box mt={2}>
            <Typography variant="body2" color="primary">
              From exchange (Max 10 exchange)
            </Typography>
            <Box mt={1}>
              <Autocomplete
                className={classes.dropdown12}
                PaperComponent={({ children }) => (
                  <Paper style={{ background: "#000" }}>{children}</Paper>
                )}
                size="small"
                multiple
                limitTags={2}
                options={exchangeList}
                onChange={(e, v) => {
                  setFilterData({
                    fromExchange: v,
                    toExchange: filterData.toExchange,
                    toExchange1: filterData.toExchange1,
                    startToken: filterData.startToken,
                    capital: filterData.capital,
                  });
                  getTokenListHandler(v[0]);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select Exchange"
                    style={{ marginLeft: 0, marginRight: 0 }}
                  />
                )}
              />
              {/* <FormControl variant="outlined" className={classes.formControl}>
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
              </FormControl> */}
            </Box>
          </Box>
          <Box align="center" mt={1}>
            <IconButton>
              <img src="images/exchange_icon.png" alt="icon" />
            </IconButton>
          </Box>
          <Box mt={2}>
            <Typography variant="body2" color="primary">
              To exchange (Max 10 exchange)
            </Typography>
            <Box mt={1}>
              <Autocomplete
                className={classes.dropdown12}
                PaperComponent={({ children }) => (
                  <Paper style={{ background: "#000" }}>{children}</Paper>
                )}
                size="small"
                multiple
                limitTags={2}
                options={exchangeList}
                onChange={(e, v) => {
                  setFilterData({
                    fromExchange: filterData.fromExchange,
                    toExchange: v,
                    toExchange1: filterData.toExchange1,
                    startToken: filterData.startToken,
                    capital: filterData.capital,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select Exchange"
                    style={{ marginLeft: 0, marginRight: 0 }}
                  />
                )}
              />
              {/* <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age1}
                  onChange={handleChange1}
                >
                 <MenuItem value="1">Select Exchange</MenuItem>
                  <MenuItem value="Binance">Binance</MenuItem>
                  <MenuItem value="Bitstamp">Bitstamp</MenuItem>
                  <MenuItem value="Kraken">Kraken</MenuItem>
                  <MenuItem value="OKEX">OKEX</MenuItem>
                </Select>
              </FormControl> */}
            </Box>
          </Box>
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
              <Autocomplete
                className={classes.dropdown12}
                PaperComponent={({ children }) => (
                  <Paper style={{ background: "#000" }}>{children}</Paper>
                )}
                // style={{ backgroundColor: "yellow", width: 300 }}
                size="small"
                multiple
                limitTags={2}
                options={coinList}
                onChange={(e, v) => {
                  setFilterData({
                    fromExchange: filterData.fromExchange,
                    toExchange: filterData.toExchange,
                    startToken: v,
                    capital: filterData.capital,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select Exchange"
                    style={{ marginLeft: 0, marginRight: 0 }}
                  />
                )}
              />
              {/* <FormControl variant="outlined" className={classes.formControl}>
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
              </FormControl> */}
            </Box>
          </Box>

          <Box className="displayCenter buttonBox">
            <Button
              variant="contained"
              color="primary"
              // component={Link}
              // to="/dashboard"
              onClick={() => setIsSearch(true)}
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

export default ConnectModal;
