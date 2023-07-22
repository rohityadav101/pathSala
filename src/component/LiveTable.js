import {
  Box,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  Table,
  TableBody,
  Typography,
} from "@material-ui/core";
import React from "react";
import DataLoader from "./DataLoader";
import NoDataFoundFrame from "./NoDataFoundFrame";

const useStyles = makeStyles((theme) => ({
  livetableBox: {
    position: "relative",
    zIndex: "999",
    "& .MuiTableContainer-root": {
      maxHeight: "calc(100vh - 269px)",
    },
    "& .MuiTableHead-root": {
      position: "sticky",
      top: 0,
      background: "#2e2e2e",
      borderTop: "1px solid #636262",
    },
    // "& .MuiTableBody-root": {
    //   maxHeight: "584px",
    // },
    "& .typoBox": {
      padding: "10px 0px 30px",
    },
    "& .invitebutton": {
      marginRight: "-13px",
      padding: "24px 39px",
    },
    "& .paperBox": {
      padding: "80px 30px",
      boredrRadius: "5px",
    },
    "& .invitelistBox": {
      padding: "30px 0px 10px",
    },
    "& .displaySpacearound": {
      borderTop: "1px solid #636262",
      padding: "10px 0px",
      marginTop: "15px",
    },
  },
}));

export default function Invite({
  base,
  pair,
  asksBids,
  asks,
  bids,
  isLoading,
}) {
  const classes = useStyles();

  return (
    <Box className={`${classes.livetableBox} scrollLive`}>
      <Box className="displaySpacearound">
        <Typography variant="h5" color="primary">
          ASKS{base} {pair}
        </Typography>
        <Typography variant="h5" color="primary">
          BIDS{base} {pair}
        </Typography>
      </Box>
      {asksBids?.length > 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>Size</TableCell>
                <TableCell style={{ minWidth: "100px", textAlign: "center" }}>
                  Price
                </TableCell>
                <TableCell style={{ minWidth: "200px", textAlign: "center" }}>
                  Size
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>Price</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {asksBids &&
                asksBids.map((value) => (
                  <TableRow>
                    <TableCell style={{ textAlign: "center" }}>
                      {value.asksSize}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {value.asksPrice}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {value.bidsSize}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {value.bidsPrice}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {asks?.length > 0 && asksBids?.length === 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>Size</TableCell>
                <TableCell style={{ minWidth: "100px", textAlign: "center" }}>
                  Price
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {asks &&
                asks.map((value) => (
                  <TableRow>
                    <TableCell style={{ textAlign: "center" }}>
                      {value[1]}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {value[0]}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {bids?.length > 0 && asksBids?.length == 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>Size</TableCell>
                <TableCell style={{ minWidth: "100px", textAlign: "center" }}>
                  Price
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {bids &&
                bids?.map((value) => (
                  <TableRow>
                    <TableCell style={{ textAlign: "center" }}>
                      {value[1]}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {value[0]}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Box
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        width="100%"
      >
        {isLoading && asksBids.length === 0 && <DataLoader />}
        {!isLoading &&
          asksBids.length === 0 &&
          bids.lenght === 0 &&
          asks.lenght === 0 && (
            <NoDataFoundFrame data={"No asks and bids found"} />
          )}
      </Box>
    </Box>
  );
}
