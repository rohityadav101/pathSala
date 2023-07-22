import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Dialog,
  withStyles,
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
  Switch,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { IoClose } from "react-icons/io5";
import DirectCard from "src/views/pages/Dashboard/DirectCard";
import LiveTable from "./LiveTable";
import { dataPostHandler } from "src/apiConfig/service";
import { toast } from "react-toastify";
import axios from "axios";
import apiConfigs from "src/apiConfig/ApiConfig";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    width: "50%",
    backgroundColor: "transparent",
    border: "1px solid gray",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#5CD748",
  },
}))(LinearProgress);

const RedLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    width: "50%",
    backgroundColor: "transparent",
    border: "1px solid gray",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#FF3939",
  },
}))(LinearProgress);
const useStyles = makeStyles((theme) => ({
  livetrackingModalBox: {
    // padding: "30px",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& .MuiSelect-selectMenu": {
      fontSize: "14px",
    },
    "& .greenprogressbar": {
      position: "relative",
    },
  },
  redprogressbar: {
    "& .WithStyles(ForwardRef(LinearProgress))-bar-311": {
      backgroundColor: "red",
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

const directdata = [
  {
    title: "BTCUSDT",
    name: "Buy price:",
    trading: "Trading charges:",
    buy: "Final buy price:",
    selltitle: "IOSTBTC",
    sellname: "Sell price:",
    sellprice: "$5276.1045",
    cryptotrading: "Crypto trading charges:",
    cryptonet: "Crypto transfer network:",
  },
];

function ConnectModal({
  open,
  setOpen,
  data,
  isProcessing,
  funcToFire,
  showPlacedExchange,
  arbitrageHistory,
  activeBlockFun,
  isLoading,
  deleteFun,
  cancelFun,
  types,
}) {
  const classes = useStyles();
  const [checkout, setCheckout] = useState(false);
  const [isProcessing1, setIsProcessing] = useState(false);
  const handleOpenCheckOut = () => {
    setCheckout(true);
    setOpen(false);
  };
  const [age, setAge] = useState(1);
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);
  const [asksBids, setAsksBids] = useState([]);

  const tradeProfitPathsDirectHandler = async (value) => {
    try {
      // console.log(types, " ----->>> direct ", value);
      setIsProcessing(true);

      const dataToSend = {
        buyExchange: value.buy,
        sellExchange: value.sell,
        symbol1: value.base,
        symbol2: value.pair,
      };

      const formData = new FormData();
      formData.append("buyExchange", value.buy);
      formData.append("sellExchange", value.sell);
      formData.append("symbol1", value.base);
      formData.append("symbol2", value.pair);

      const response = await dataPostHandler("asks_bids_prices", dataToSend);

      console.log(" -- response ", response);
      if (response.status == 200) {
        let asks = response.data.result?.asks ? response.data.result?.asks : [];
        let bids = response.data.result?.bids ? response.data.result?.bids : [];
        setAsks(asks);
        setBids(bids);
        setIsProcessing(false);
        const combinedArray = asks?.map((obj, index) => {
          return Object.assign({
            asksSize: obj[0],
            asksPrice: obj[1],
            bidsSize: bids[index][0],
            bidsPrice: bids[index][1],
          });
        });
        console.log("  ---- obj combinedArray", combinedArray);
        setAsksBids(combinedArray);
        // setIsOpenTrade(false);
      } else {
        setIsProcessing(false);
      }
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
    }
  };
  useEffect(() => {
    if (data) {
      tradeProfitPathsDirectHandler(data);
    }
  }, [data]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const LiveDialougeData = (data) => {
    return (
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xxl"
        fullWidth
      >
        <Box className="livetrackBox1">
          <Box className={classes.livetrackingModalBox}>
            <IconButton
              className={classes.cancelBtn}
              onClick={() => setOpen(false)}
            >
              <IoClose />
            </IconButton>
            <Box mb={2}>
              <Typography variant="h5" color="primary">
                Live tracking
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                {/* <Box className="displayStart" mb={3}>
                  <Switch
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <Typography variant="body2" color="primary">
                    With Volume
                  </Typography>
                </Box> */}
                {/* {directdata.map((data, index) => ( */}
                <Box align="center">
                  <DirectCard
                    data={data}
                    key={1}
                    ExecuteButtonType={true}
                    types={types}
                  />
                </Box>
                {/* ))} */}
              </Grid>
              <Grid item lg={8} md={8} sm={6} xs={12}>
                {/*    <Box className={classes.livetrackingModalBox}>
               <Box
                    className="displayStart"
                    style={{ position: "relative" }}
                  >
                    <Box className="displayStart">
                      <Typography variant="body1" color="primary">
                        Bids
                      </Typography>
                      <Box className="greenBox" ml={2}></Box>
                    </Box>

                    <BorderLinearProgress variant="determinate" value={50} />
                  </Box>
                </Box> */}

                {/* <Box className={classes.redprogressbar} mt={2}>
                  <Box
                    className="displayStart"
                    style={{ position: "relative" }}
                  >
                    <Box className="displayStart">
                      <Typography variant="body1" color="primary">
                        Asks
                      </Typography>
                      <Box className="redBox" ml={2}></Box>
                    </Box>

                    <RedLinearProgress variant="determinate" value={50} />
                  </Box>
                </Box> */}

                <Box mt={3} mb={3}>
                  <Typography variant="h4" color="primary">
                    Order Book
                  </Typography>
                  <LiveTable
                    base={data.base}
                    pair={data.pair}
                    asksBids={asksBids}
                    bids={bids}
                    asks={asks}
                    isLoading={isProcessing1}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Dialog>
    );
  };
  return (
    <>
      {/* <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xxl"
        fullWidth
      >
        <Box className="livetrackBox">
          <Box className={classes.livetrackingModalBox}>
            <IconButton
              className={classes.cancelBtn}
              onClick={() => setOpen(false)}
            >
              <IoClose />
            </IconButton>
            <Box mb={2}>
              <Typography variant="h5" color="primary">
                Live tracking
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box className="displayStart" mb={3}>
                  <Switch
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <Typography variant="body2" color="primary">
                    With Volume
                  </Typography>
                </Box>
                {directdata.map((data, index) => (
                  <Box align="center">
                    <DirectCard data={data} key={index} />
                  </Box>
                ))}
              </Grid>
              <Grid item lg={8} md={8} sm={6} xs={12}>
                <Box className={classes.livetrackingModalBox}>
                  <Box
                    className="displayStart"
                    style={{ position: "relative" }}
                  >
                    <Box className="displayStart">
                      <Typography variant="body1" color="primary">
                        Bids
                      </Typography>
                      <Box className="greenBox" ml={2}></Box>
                    </Box>

                    <BorderLinearProgress variant="determinate" value={50} />
                  </Box>
                </Box>

                <Box className={classes.redprogressbar} mt={2}>
                  <Box
                    className="displayStart"
                    style={{ position: "relative" }}
                  >
                    <Box className="displayStart">
                      <Typography variant="body1" color="primary">
                        Asks
                      </Typography>
                      <Box className="redBox" ml={2}></Box>
                    </Box>

                    <RedLinearProgress variant="determinate" value={50} />
                  </Box>
                </Box>

                <Box mt={3} mb={3}>
                  <Typography variant="h4" color="primary">
                    Order Book
                  </Typography>
                  <LiveTable />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Dialog> */}
      {showPlacedExchange ? LiveDialougeData(data) : LiveDialougeData(data)}
    </>
  );
}

export default ConnectModal;
