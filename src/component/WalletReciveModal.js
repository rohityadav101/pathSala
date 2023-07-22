import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Button,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  displayCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "50px 0px 30px",
  },
  copyBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.palette.background.blackCard,
    border: "1px solid #414040",
    borderRadius: "5px",
    padding: "10px",
  },
}));

export default function WalletReciveModal({
  opendialogmodal,
  setOpendialogmodal,
}) {
  const classes = useStyles();

  return (
    <Box>
      <Dialog
        open={opendialogmodal}
        onClose={() => setOpendialogmodal(false)}
        fullWidth
        maxWidth="xs"
      >
        <Typography variant="h5" color="primary">
          USDT (TRC-20)
        </Typography>

        <Box align="center" my={3}>
          <Box style={{ background: "#FF6600", maxWidth: "274px" }}>
            <img src="images/scanner.png" />
          </Box>
        </Box>
        <Box className={classes.copyBox}>
          <Box>
            <Typography variant="body2">TRC-20address</Typography>
            <Typography variant="body1">
              TCQfy1xaoef541qe9ee89ded5ed7qd....
            </Typography>
          </Box>
          <IconButton>
            <img src="images/copyimg.png" />
          </IconButton>
        </Box>
        <Box className={classes.displayCenter}>
          <Box>
            <Button variant="contained" color="primary" fullWidth>
              Copy
            </Button>
          </Box>

          <Box ml={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setOpendialogmodal(false)}
              style={{ background: "#636363" }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
