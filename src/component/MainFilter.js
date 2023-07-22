import {
  Box,
  Paper,
  makeStyles,
  Grid,
  TextField,
  FormControl,
  Button,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

import React from "react";

const useStyles = makeStyles((theme) => ({
  mainfilter: {
    "& .displayEnd": {
      marginTop: "30px",
    },
    "& .filterpaper": {
      padding: "30px",
    },
  },
}));

export default function MainFilter({ type }) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [age, setAge] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className={classes.mainfilter}>
      <Paper elevation={2} className="filterpaper">
        {type === "transaction" ? (
          <>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={12} sm={6} md={2}>
                <Box mb={1}>
                  <Typography variant="body2" color="primary">
                    Exchange
                  </Typography>
                </Box>

                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Select Exchange</MenuItem>
                    <MenuItem value={10}>Binance</MenuItem>
                    <MenuItem value={20}>Bitstamp</MenuItem>
                    <MenuItem value={30}>kraken</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box mb={1}>
                  <Typography variant="body2" color="primary">
                    Coin
                  </Typography>
                </Box>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Select Coin</MenuItem>
                    <MenuItem value={10}>ETH</MenuItem>
                    <MenuItem value={20}>BTC</MenuItem>
                    <MenuItem value={30}>BNB</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    id="date-picker-dialog"
                    format="MM/DD/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    id="date-picker-dialog"
                    format="MM/DD/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Button variant="contained" color="primary" fullWidth>
                  Search
                </Button>
              </Grid>
            </Grid>
            <Box className="displayEnd">
              <Button variant="contained" color="primary">
                Reset
              </Button>
              <Box>
                <Button variant="contained" color="primary">
                  Export
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  variant="outlined"
                  placeholder="Search by Trx Hash"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    id="date-picker-dialog"
                    format="MM/DD/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    id="date-picker-dialog"
                    format="MM/DD/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Button variant="contained" color="primary" fullWidth>
                  Download CSV
                </Button>
              </Grid>
            </Grid>
            <Box className="displayEnd">
              <Button variant="contained" color="primary">
                Reset
              </Button>
              <Box>
                <Button variant="contained" color="primary">
                  Apply
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
}
