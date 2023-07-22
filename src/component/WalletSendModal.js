import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Button,
  makeStyles,
  IconButton,
  FormHelperText
} from "@material-ui/core";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Form, Formik } from "formik";
import * as yep from "yup";

const useStyles = makeStyles((theme) => ({
  sendmodalBox: {},
  displayCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "60px 0px 30px",
  },
}));

export default function WalletSendModal({ opendialog, setOpendialog }) {
  const classes = useStyles();
  const formInitialSchema = {
   
    wallet: "",
  };
  const formValidationSchema = yep.object().shape({
    wallet: yep
      .string()

      .required("Please enter address."),
  });
  const handleFormSubmit = async (values) => {
    // history.push("/dashboard")
  };

  return (
    <Box className={classes.sendmodalBox}>
      <Dialog
        open={opendialog}
        onClose={() => setOpendialog(false)}
        fullWidth
        maxWidth="xs"
      >
        <Box className="displayStart">
          <Typography variant="h5" color="primary">
            USDT (TRC-20)
          </Typography>
          <IconButton>
            <AiFillInfoCircle />
          </IconButton>
        </Box>
        <Formik
          initialValues={formInitialSchema}
          initialStatus={{
            success: false,
            successMsg: "",
          }}
          validationSchema={formValidationSchema}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
            setFieldValue,
          }) => (
            <Form>
              <Box>
                <Box mt={2} mb={1}>
                  <Typography variant="body2" color="secondary">
                    Enter Amount
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Coin Amount"
                />
              </Box>
              <Box>
                <Box mt={2} mb={1}>
                  <Typography variant="body2" color="secondary">
                    Wallet address
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="USDT Wallet Address"
                  name="wallet"
                  value={values.wallet}
                  error={Boolean(touched.wallet && errors.wallet)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                 <FormHelperText error className={classes.helperText}>
                      {touched.wallet && errors.wallet}
                    </FormHelperText>
              </Box>
              <Box className={classes.displayCenter}>
                <Box>
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Send
                  </Button>
                </Box>

                <Box ml={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => setOpendialog(false)}
                    style={{ background: "#636363" }}
                  >
                    Close
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Dialog>
    </Box>
  );
}
