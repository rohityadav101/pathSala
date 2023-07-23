import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  makeStyles,
  FormHelperText,
  Avatar,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { MdDelete } from "react-icons/md";
import * as yup from "yup";

import MainStepper from "./StepperComponent/MainStepper";
import { BsChevronRight } from "react-icons/bs";
const useStyles = makeStyles((theme) => ({
  mainUserInfoBox: {
    "& .MainPaperBox": {
      position: "relative",
      padding: "10px 20px",
    },
    "& .hrLine": {
      position: "absolute",
      top: "auto",
      left: "-1px",
      width: "100%",
    },
  },
  avatarBox1: {
    border: "1px solid #3E53A0",
    cursor: "pointer",
    borderRadius: "50%",
    width: "130px",
    height: "130px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#80808040",
  },
  avatarBox: {
    position: "relative",

    "& .MuiAvatar-root": {
      width: "130px",
      height: "130px",
      margin: "auto",
      border: "1px solid #3E53A0",
    },
    "& .MuiIconButton-root": {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translate(51%)",
      color: "#3E53A0",
      background: "#141211c7",
    },
  },
}));
export default function UserInfo() {
  const classes = useStyles();
  const initialValues = {
    Category: "",
    categoryImage: "",
    name:"",
    email:"",
    phone:"",
    
  };
  const validationSchema = yup.object().shape({
    Category: yup.string().required("Category name is required."),
    categoryImage: yup.string().required("Image is required."),
    name:yup.string().required("name is required."),
    email:yup.string().required("email is required."),
    phone:yup.string().required("phone is required."),
  });
  const handleSubmitDataFun = async (values) => {};
  return (
    <Box mt={1} className={classes.mainUserInfoBox}>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Paper className="MainPaperBox" elevation={2}>
              <Typography variant="h6">Edit Info.</Typography>
              <Divider className="hrLine" style={{ top: "45px" }} />
              <Box display="flex" justifyContent="center">
                <Box py={4} maxWidth="270px">
                  <Box>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={(values) => handleSubmitDataFun(values)}
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
                          <Box mb={2}>
                            <input
                              accept="image/*"
                              id="categoryImage-data"
                              name="categoryImage"
                              type="file"
                              hidden
                              onChange={(e) => {
                                const maxSize = 2 * 1024 * 1024;
                                if (e.target.files[0].size <= maxSize) {
                                  setFieldValue(
                                    "categoryImage",
                                    URL.createObjectURL(e.target.files[0])
                                  );
                                  setFieldValue(
                                    "categoryImageApi",
                                    e.target.files[0]
                                  );
                                }
                              }}
                            />
                            {values.categoryImage ? (
                              <Box className={classes.avatarBox}>
                                <Avatar
                                  src={
                                    values.categoryImage && values.categoryImage
                                  }
                                />
                                {values.categoryImage && (
                                  <IconButton
                                    className={classes.iconbuttonBox}
                                    onClick={(e) => {
                                      setFieldValue("categoryImage", "");
                                    }}
                                  >
                                    <MdDelete />
                                  </IconButton>
                                )}
                              </Box>
                            ) : (
                              <label htmlFor="categoryImage-data">
                                <Box className={classes.avatarBox1}>
                                  <img src="images/uploadicon.png" alt="" />
                                </Box>
                              </label>
                            )}
                            <ErrorMessage
                              style={{ textAlign: "center" }}
                              name="categoryImage"
                              component={FormHelperText}
                              error
                            />
                          </Box>
                          <Box pb={2}>
                    <Box mb={1}>
                      <Typography variant="body2" style={{ fontWeight: "500" }}>
                        Name
                      </Typography>
                    </Box>
                    <TextField
                      variant="outlined"
                      placeholder="Enter your full name"
                      name="name"
                      value={values.name}
                      error={Boolean(
                        touched.name && errors.name
                      )}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                         <FormHelperText error>
                      {touched.name && errors.name}
                    </FormHelperText>
                  </Box>

                  <Box pb={2}>
                    <Box mb={1}>
                      <Typography variant="body2" style={{ fontWeight: "500" }}>
                        E-mail
                      </Typography>
                    </Box>

                    <TextField
                      variant="outlined"
                      name="email"
                      placeholder="Enter your email address"
                      value={values.email}
                      error={Boolean(
                        touched.email && errors.email
                      )}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                      <FormHelperText error>
                      {touched.email && errors.email}
                    </FormHelperText>
                  </Box>
                  <Box pb={2}>
                    <Box mb={1}>
                      <Typography variant="body2" style={{ fontWeight: "500" }}>
                        Phone{" "}
                      </Typography>
                    </Box>

                    <Box display="flex">
                      <TextField
                        style={{ width: "70px" }}
                        variant="outlined"
                        placeholder="+91"
                        
                        defaultValue="+91"
                    
                      
                      />
                      &nbsp; &nbsp;
                      <TextField
                        variant="outlined"
                        placeholder="Enter your phone number"
                        value={values.phone}
                        type="number"
                        name="phone"
                      error={Boolean(
                        touched.phone && errors.phone
                      )}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      />
                    </Box>
                    <FormHelperText error>
                      {touched.phone && errors.phone}
                    </FormHelperText>
                  </Box>
                  <Box pt={2}>
                    <Button type="submit" style={{backgroundColor:"#C42D28", boxShdow:"none",color:"#fff" }} fullWidth variant="contained" color="primary">
                      20% Profile Completed ---<BsChevronRight/>
                    </Button>
                  </Box>
                        </Form>
                      )}
                    </Formik>
                  </Box>
              
                </Box>
              </Box>
            </Paper>{" "}
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <Paper style={{ padding: "10px" }} elevation={2}>
              <MainStepper />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
