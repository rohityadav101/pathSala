import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  mainHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function Topheading({ heading, pathname, btnname }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.mainHead}>
      <Typography variant="h2">{heading}</Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push(`${pathname}`)}
      >
        {btnname}
      </Button>
    </Box>
  );
}
